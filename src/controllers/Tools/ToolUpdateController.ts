import { Request, Response } from "express";
import { ToolUpdateService } from "../../services/Tools/ToolUpdateService";

class ToolUpdateController {
  async handle(request: Request, response: Response){
    const { id } = request.params;
    const { title, link, description, tags } = request.body;

    const toolCreateService = new ToolUpdateService();

    const tool = await toolCreateService.execute(id, { title, link, description, tags})
  
    return response.status(204).json(tool);
  }
}

export { ToolUpdateController }