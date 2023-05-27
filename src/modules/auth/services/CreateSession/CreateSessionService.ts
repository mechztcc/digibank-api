import { IUsersRepository } from '@modules/users/domain/repositories/interfaces/UsersRepository.interface';
import { HTTPSTATUSCODE } from '@shared/types/HttpStatusCode';
import { compare } from 'bcryptjs';
import DefaultException from 'src/configs/errors/DefaultExcection';
import { inject, injectable } from 'tsyringe';

import auth from '../../../../configs/auth/auth';

import { sign } from 'jsonwebtoken';

interface IRequest {
  document: string;
  password: string;
}

@injectable()
export class CreateSessionService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository
  ) {}

  async execute({ document, password }: IRequest): Promise<any> {
    const userExists = await this.usersRepository.findByDocument(document);

    if (!userExists) {
      throw new DefaultException('User not found.', HTTPSTATUSCODE.NOT_FOUND);
    }

    const passwordConfirmed = await compare(password, userExists.password);

    if (!passwordConfirmed) {
      throw new DefaultException(
        'Password incorrect.',
        HTTPSTATUSCODE.UNPROCESSABLE_ENTITY
      );
    }

    const token = sign({}, auth.jwt.secret, {
      subject: String(userExists.id),
      expiresIn: auth.jwt.expiresIn,
    });

    return token;
  }
}
