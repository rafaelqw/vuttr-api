import { Request, Response } from "express";
import { ToolCreateService } from "../../services/Tools/ToolCreateService";

class ToolsCreateController {
  async handle(request: Request, response: Response){
    const { title, link, description, tags } = request.body;

    const toolCreateService = new ToolCreateService();

    const tool = await toolCreateService.execute({ title, link, description, tags})
  
    return response.status(201).json(tool);
  }
}

export { ToolsCreateController }