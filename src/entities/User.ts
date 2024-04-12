import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Gift } from "./Gift";

@Entity("users")
class User {

  @PrimaryColumn()
  id: string;

  @Column()
  gift_id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  gift: Gift;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { User };