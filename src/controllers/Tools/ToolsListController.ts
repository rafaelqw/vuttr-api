import { Request, Response } from "express";
import { Tool } from "../../entities/Tool";
import { ToolsListService } from "../../services/Tools/ToolsListService";

class ToolsListController {
  async handle(request: Request, response: Response){
    const toolsListService = new ToolsListService();

    let tools: Tool[];

    if(request.query){
      const keys = Object.keys(request.query);
      const key = keys[0];
      const value = request.query[key];
      tools = await toolsListService.execute({key, value})
    } else {
      tools = await toolsListService.execute({key: null, value: null})
    }

  
    return response.status(200).json(tools);
  }
}

export { ToolsListController }