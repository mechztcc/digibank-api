import { PrismaClient } from '@prisma/client';
import { IUser } from '../../domain/models/entities/User.interface';
import { IUsersRepository } from '../../domain/repositories/interfaces/UsersRepository.interface';

export class UsersRepository implements IUsersRepository {
  private repository: PrismaClient = new PrismaClient();

  constructor() {}
  
  findByDocument(document: string): Promise<IUser | null> {
    const userExists = this.repository.user.findUnique({ where: { document } });
    return userExists;
  }

  create({ document, name, password }: IUser): Promise<IUser> {
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
