import { Request, Response } from 'express';
import { HTTP_STATUS_CODES } from '../types/http-status-codes';
import auth from '../models/auth';
import { generateToken } from '../utils/jwt';

class AuthController {
  registerUser = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;

    try {
      const user = await auth.registerUser(name, email, password, role);
      res.status(HTTP_STATUS_CODES.CREATED).json({ message: 'User created' });
    } catch (error) {
      res.status(HTTP_STATUS_CODES.I_AM_A_TEAPOT).json({ error: (error as Error).message });
    }
  }

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const user = await auth.loginUser(email, password);
      const token = generateToken(user);
      res.status(HTTP_STATUS_CODES.SUCCESS).json({ token });
    } catch (error) {
      res.status(HTTP_STATUS_CODES.ENHANCE_YOUR_CALM).json({ message: (error as Error).message });
    }
  }
}

const authController = new AuthController();
export default authController;