import { EntityRepository, Repository } from "typeorm";
import { Tool } from "../entities/Tool";

@EntityRepository(Tool)
class ToolsRepositories extends Repository<Tool> {
  public async findByKey(key: string, value: string): Promise<Tool[]> {
    switch(key){
      case 'tag':
        return await this.createQueryBuilder('tools')
          .where(`:tag = ANY(tools.tags)`, {tag: value})
          .getMany();
      case 'all':
        return await this.createQueryBuilder("tools")
        .where(`tools.title like :param OR tools.description like :param OR :tag = ANY(tools.tags)`, { param: `%${value}%`, tag: `${value}` })
        .getMany();
      default:
        return await this.createQueryBuilder("tools")
        .where(`tools.${key} like :param`, { param: `%${value}%` })
        .getMany();
    }
  }
}

export { ToolsRepositories };
