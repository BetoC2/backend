import { NextFunction, Request, Response } from "express"
import { User } from "../types/user.d"

const userHarcodeado: User = {
  id: 0,
  name: 'Hardcodeado',
  email: 'hard@codeado.com',
  role: "cliente"
}

const roles = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (allowedRoles.includes(userHarcodeado.role))
      next()
    else
      res.sendStatus(403)
  }
}

export default roles