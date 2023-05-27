import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService/CreateUserService';

import { container } from 'tsyringe';
export class UsersController {
  async create(req: Request, res: Response) {
    const { document, name, password } = req.body;
    
    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({ document, name, password });

    return res.json(user);
  }
}
