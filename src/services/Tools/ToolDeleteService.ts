import { getCustomRepository } from "typeorm";
import { ToolsRepositories } from "../../repositories/ToolsRepositories";

class ToolDeleteService {
  async execute( id : string ) {

    const toolRepository = getCustomRepository(ToolsRepositories);

    const tool = toolRepository.delete(id);

    return tool;
  }
}

export { ToolDeleteService }