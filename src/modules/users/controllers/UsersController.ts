import { Response, Request } from 'express';
import { CreateUserService } from '../services/CreateUserService/CreateUserService';

import { container } from 'tsyringe';
export class UsersController {
  async create(req: Request, res: Response) {
    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute();

    return res.json({ message: user });
  }
}
