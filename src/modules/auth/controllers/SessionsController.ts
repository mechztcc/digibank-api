import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSessionService } from '../services/CreateSession/CreateSessionService';

export class SessionsController {
  async create(req: Request, res: Response): Promise<any> {
    const { document, password } = req.body;

    const createSessionsService = container.resolve(CreateSessionService);

    const token = await createSessionsService.execute({ document, password });

    return res.json(token);
  }
}
