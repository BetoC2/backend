import { Request, Response } from 'express';

class UsersController {
  getAll(req: Request, res: Response) {
    res.send([{
      id: 1,
      name: "Alberto",
      email: "alberto@email.com"
    },
    {
      id: 2,
      name: "Alberto2",
      email: "alberto2@email.com"
    },
    {
      id: 3,
      name: "Alberto3",
      email: "alberto3@email.com"
    },
    ])
  }
}

const usersController = new UsersController()
export default usersController
