import { Request, Response } from 'express';

class UsersController {
  getAll(req: Request, res: Response) {
    res.send('lista de usuarios.')
  }
}

const usersController = new UsersController()
export default usersController
