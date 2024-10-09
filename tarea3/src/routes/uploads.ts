import { Router } from 'express';
import uploads from '../middlewares/uploadsMiddleware';
import HTTP_STATUS_CODES from '../types/https-status-codes';

const updatesRoutes = Router();

updatesRoutes.post('/', uploads.array('docs'), (req, res) => {
  const files = req.files as Express.Multer.File[];
  console.log('Files', files)

  if (files && files.length) 
    res.status(HTTP_STATUS_CODES.OK).json({files});
  else 
    res.status(HTTP_STATUS_CODES.BAD_REQUEST).send('No file uploaded');
});

export default updatesRoutes