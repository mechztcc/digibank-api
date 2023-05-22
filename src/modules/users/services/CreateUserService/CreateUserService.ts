import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../domain/repositories/interfaces/UsersRepository.interface';

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
    const user = this.usersRepository.create({ document, name, password });

    return user;
  }
}
