import { IUser } from '../../domain/models/entities/User.interface';
import { IUsersRepository } from '../../domain/repositories/interfaces/UsersRepository.interface';
import { PrismaClient, PrismaPromise } from '@prisma/client';

export class UsersRepository implements IUsersRepository {
  private repository: PrismaClient = new PrismaClient();

  constructor() {}

  create(payload: IUser): Promise<IUser> {
    const { document, name, password } = payload;

    const user = this.repository.user.create({
      data: { document, name, password },
    });

    return user;
  }

  async index(): Promise<IUser[]> {
    const users = await this.repository.user.findMany();
    return users;
  }

  async findById(id: number): Promise<IUser | null> {
    const user = await this.repository.user.findUnique({ where: { id } });

    return user;
  }
}
