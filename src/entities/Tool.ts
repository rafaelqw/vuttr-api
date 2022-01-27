import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("tools")
class Tool {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;
  
  @Column()
  link: string;

  @Column()
  description: string;

  @Column("text", { array: true })
  tags: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}

export { Tool };
