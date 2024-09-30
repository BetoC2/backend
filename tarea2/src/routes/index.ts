import { Router } from 'express';
import userRoutes from './users';
import authRoutees from './auth';

const router = Router();

router.get('', (req, res) => {
    res.send('api works!');
})

router.use('/users', userRoutes);
router.use('/auth', authRoutees);


export default router;