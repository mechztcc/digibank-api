import { IUser } from '../../domain/models/entities/User.interface';
import { IUsersRepository } from '../../domain/repositories/interfaces/UsersRepository.interface';
import { PrismaClient } from '@prisma/client';

export class UsersRepository implements IUsersRepository {
  constructor() {}

  findById(): Promise<any> {
    const repository = new PrismaClient();
    const user = repository.user.findFirst();

    return user;
  }
}
