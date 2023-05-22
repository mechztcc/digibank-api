import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../domain/repositories/interfaces/UsersRepository.interface';
import DefaultException from 'src/configs/errors/DefaultExcection';
import { HTTPSTATUSCODE } from '@shared/types/HttpStatusCode';

interface IRequest {
  document: string;
  name: string;
  password: string;
}
@injectable()
export class CreateUserService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository
  ) {}
  async execute({ document, name, password }: IRequest): Promise<any> {
    const userExists = await this.usersRepository.findByDocument(document);

    if (userExists) {
      throw new DefaultException(
        'Document has already in use.',
        HTTPSTATUSCODE.CONFLICT
      );
    }

    const user = this.usersRepository.create({ document, name, password });

    return user;
  }
}
