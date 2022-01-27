import { Request, Response } from "express";
import { ToolDeleteService } from "../../services/Tools/ToolDeleteService";

class ToolDeleteController {
  async handle(request: Request, response: Response){
    const { id } = request.params;

    const toolDeleteService = new ToolDeleteService();

    const tool = await toolDeleteService.execute(id)
  
    return response.status(204).json(tool);
  }
}

export { ToolDeleteController }