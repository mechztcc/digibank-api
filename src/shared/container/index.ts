import { container } from 'tsyringe';
import { IUsersRepository } from '../../modules/users/domain/repositories/interfaces/UsersRepository.interface';
import { UsersRepository } from '../../modules/users/prismaorm/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
