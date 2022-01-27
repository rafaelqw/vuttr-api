import { Router } from 'express';
import { ToolsCreateController } from '../controllers/Tools/ToolCreateController';
import { ToolsListController } from '../controllers/Tools/ToolsListController';
import { ToolDeleteController } from '../controllers/Tools/ToolDeleteController';
import { ToolUpdateController } from '../controllers/Tools/ToolUpdateController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const toolsRouter = Router();

const toolsCreateController = new ToolsCreateController();
const toolsListController = new ToolsListController();
const toolDeleteController = new ToolDeleteController();
const toolUpdateController = new ToolUpdateController();

toolsRouter.get('/', toolsListController.handle);

toolsRouter.post('/', ensureAuthenticated, toolsCreateController.handle);
toolsRouter.put('/:id', ensureAuthenticated, toolUpdateController.handle);
toolsRouter.delete('/:id', ensureAuthenticated, toolDeleteController.handle);

export { toolsRouter };
