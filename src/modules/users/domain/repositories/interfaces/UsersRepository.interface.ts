import { IUser } from '../../models/entities/User.interface';

export interface IUsersRepository {
  findById(): Promise<IUser | null>;
}
