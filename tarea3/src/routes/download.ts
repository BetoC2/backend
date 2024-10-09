import Router from 'express';
import HTTP_STATUS_CODES from '../types/https-status-codes';
import path from 'node:path';
import fs from 'node:fs';

const downloadRoutes = Router();

downloadRoutes.get('/', (req, res) => {
  const fileName = req.query.file as string;

  if (!fileName) {
    res.status(HTTP_STATUS_CODES.NOT_FOUND).send('File name is required');
    return;
  }

  const filePath = path.join(__dirname, '..', '..', 'documents', fileName);

  if (fs.existsSync(filePath))
    res.download(filePath);
  else
    res.status(HTTP_STATUS_CODES.NOT_FOUND).send('File not found');
});

export default downloadRoutes;