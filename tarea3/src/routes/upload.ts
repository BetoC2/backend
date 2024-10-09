import { Router } from 'express';
import upload from '../middlewares/uploadMiddleware';
import HTTP_STATUS_CODES from '../types/https-status-codes';

const updateRoutes = Router();

updateRoutes.post('/', upload.single('file'), (req, res) => {
  console.log('Archivo', req.file)
  if (req.file) 
    res.send('File uploaded!');
  else 
    res.status(HTTP_STATUS_CODES.BAD_REQUEST).send('No file uploaded');
});

export default updateRoutes