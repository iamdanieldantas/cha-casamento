import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("gifts")
class Gift {

  @PrimaryColumn()
  id: string;

  @Column()
  nome_presente: string;

  @Column()
  disponivel: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Gift };