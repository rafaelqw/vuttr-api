import { Router } from 'express';
import { SessionCreateController } from '../controllers/shared/SessionCreateController';

const sessionsRouter = Router();

const sessionCreateController = new SessionCreateController();

sessionsRouter.post('/', sessionCreateController.handle);

export { sessionsRouter };
