import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { AppError } from "../../errors/AppError";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

class UserCreateService {
  async execute( userData : IUserRequest ) {

    const userRepository = getCustomRepository(UsersRepositories);

    const exists = await userRepository.findByEmail(userData.email);

    if (exists) {
      throw new AppError('E-mail already registered.', 409);
    }

    const hashPassword = await hash(userData.password, 8);

    const user = userRepository.create({...userData, password: hashPassword});

    await userRepository.save(user);

    delete user.password;

    return user;
  }
}

export { UserCreateService }