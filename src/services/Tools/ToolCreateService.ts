import { getCustomRepository } from "typeorm";
import { ToolsRepositories } from "../../repositories/ToolsRepositories";

interface IToolRequest {
  title: string,
  link: string,
  description: string,
  tags: string[]
}

class ToolCreateService {
  async execute( toolData : IToolRequest ) {

    const toolRepository = getCustomRepository(ToolsRepositories);

    const tool = toolRepository.create(toolData);

    await toolRepository.save(tool);

    return tool;
  }
}

export { ToolCreateService }