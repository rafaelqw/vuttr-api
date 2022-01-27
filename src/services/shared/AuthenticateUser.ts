import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { User } from '../../entities/User';
import { authConfig } from '../../config/auth';
import { AppError } from '../../errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ 
    email, 
    password,
  }: IRequest): Promise<IResponse> {

    const repository: UsersRepositories = getCustomRepository(UsersRepositories);
  
    
    const user = await repository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect username/password combination.', 406);
    }

    const passwordMatched = await compare(password, user.password);
    
    if (!passwordMatched) {
      throw new AppError('Incorrect username/password combination.', 406);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export { AuthenticateUserService };
