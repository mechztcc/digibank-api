import { IUser } from '../../domain/models/entities/User.interface';
import { IUsersRepository } from '../../domain/repositories/interfaces/UsersRepository.interface';
import { PrismaClient } from '@prisma/client';

export class UsersRepository implements IUsersRepository {
  constructor() {}

  async findById(): Promise<IUser | null> {
    const repository = new PrismaClient();
    const user = await repository.user.findFirst();

    return user;
  }
}
