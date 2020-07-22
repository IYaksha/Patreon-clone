import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('user')
export class User {

  @PrimaryGeneratedColumn('uuid', {
    name: 'id'
  })
  userId: string;

  @Column({
    name: 'user_name'
  })
  username: string;

  @Column({
    name: 'password'
  })
  password: string;

}