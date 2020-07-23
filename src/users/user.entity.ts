import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('user')
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

}