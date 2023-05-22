import { Response, Request } from 'express';
import { CreateUserService } from '../services/CreateUserService/CreateUserService';

export class UsersController {
  async create(req: Request, res: Response) {
    const createUserService = new CreateUserService();

    const user = await createUserService.execute();

    return res.json({ message: user });
  }
}
