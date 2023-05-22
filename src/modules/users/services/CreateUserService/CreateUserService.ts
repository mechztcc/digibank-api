interface IRequest {
  document: string;
  name: string;
  password: string;
}

export class CreateUserService {
  async execute(): Promise<any> {
    return 'Working';
  }
}
