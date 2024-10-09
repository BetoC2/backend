import { Router } from 'express';
import updateRoutes from './upload';
import updatesRoutes from './uploads';
import downloadRoutes from './download';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.use('/upload', updateRoutes)
router.use('/uploads',updatesRoutes)
router.use('/download', downloadRoutes);

export default router