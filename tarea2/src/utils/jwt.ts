import jwt from 'jsonwebtoken';
import { IUser } from '../types/user';

export const generateToken = (user: IUser) => {
  return jwt.sign({ name: user.name, email: user.email, role: user.role }, process.env.SECRET_KEY as string, {
    expiresIn: '1h',
  });
};
