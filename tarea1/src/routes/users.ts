import { Router } from 'express'
import usersController from '../controllers/usersControllers'
import authMiddleware from '../middlewares/auth'
import roles from '../middlewares/roles'

const router = Router()

router.get('/', roles(['admin', 'gerente']), usersController.getAll)

export default router
