import { Request, Response, NextFunction } from "express";
import { User } from "../types/user.d";

const secretKey = '12345'

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const key = req.query.key;
  if (key === secretKey) {
    const user: User = {
      id: 1,
      name: 'John Doe'
    }
    return next();
  }

  res.sendStatus(401);
}