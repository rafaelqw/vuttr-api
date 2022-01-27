import { Request, Response } from "express";
import { UserCreateService } from "../../services/Users/UserCreateService";

class UserCreateController {
  async handle(request: Request, response: Response){
    const { name, email, password } = request.body;

    const userCreateService = new UserCreateService();

    const user = await userCreateService.execute({name, email, password})
  
    return response.status(201).json(user);
  }
}

export { UserCreateController }