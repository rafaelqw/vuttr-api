import { Router } from 'express';
import { UserCreateController } from '../controllers/Users/UserCreateController';

const usersRouter = Router();

const usersCreateController = new UserCreateController();

usersRouter.post('/', usersCreateController.handle);

export { usersRouter };
