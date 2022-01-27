import { getCustomRepository } from "typeorm";
import { ToolsRepositories } from "../../repositories/ToolsRepositories";

interface IToolRequest {
  key: string | null,
  value: any | null,
}

class ToolsListService {
  async execute( toolData : IToolRequest ) {

    const toolRepository = getCustomRepository(ToolsRepositories);

    if(toolData.key && toolData.value){
      return toolRepository.findByKey(toolData.key, toolData.value);
    } else {
      return await toolRepository.find();
    }
  }
}

export { ToolsListService }
