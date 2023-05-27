import { PrismaClient } from '@prisma/client';

export class SessionsRepository {
  private repository: PrismaClient = new PrismaClient();

  constructor() {}
}
