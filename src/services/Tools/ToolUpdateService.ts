import { getCustomRepository } from "typeorm";
import { AppError } from "../../errors/AppError";
import { ToolsRepositories } from "../../repositories/ToolsRepositories";

interface IToolRequest {
  title: string,
  link: string,
  description: string,
  tags: Array<string>
}

class ToolUpdateService {
  async execute(id: string, updateToolData : IToolRequest ) {

    const toolRepository = getCustomRepository(ToolsRepositories);

    const existsToolData = await toolRepository.findOne({
      where: { id }
    });

    if (!existsToolData) {
      throw new AppError('Tool not found.', 404);
    }

    const tool = toolRepository.save({...existsToolData, ...updateToolData});

    return tool;
  }
}

export { ToolUpdateService }