import { Request, Response } from "express";
import { AuthenticateUserService } from "../../services/shared/AuthenticateUser";

class SessionCreateController {
  async handle(request: Request, response: Response){
    const { password, email } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      email,
      password
    });

    delete user.password;
  
    return response.json({ user, token });

  }
}

export { SessionCreateController }