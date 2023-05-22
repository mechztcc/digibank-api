import { IUser } from '../../models/entities/User.interface';

export interface IUsersRepository {
  findById(id: number): Promise<IUser | null>;

  create(user: IUser): Promise<IUser>;

  index(): Promise<IUser[]>;

  findByDocument(document: string): Promise<IUser | null>;
}
