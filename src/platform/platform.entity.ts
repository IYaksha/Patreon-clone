import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "src/users/user.entity";

@Entity('platform')
export class Platform {

  @PrimaryGeneratedColumn('uuid', {
    name: 'platform_id'
  })
  id: string;

  @Column({
    name: 'platform_name',
    type: 'varchar',
    length: 50
  })
  platformName: string;

  @Column({
    name: 'platform_description',
    type: 'varchar'
  })
  platformDescription: string;

  @ManyToOne(type => User, user => user.platforms)
  @JoinColumn({ name: 'user_id' })
  user: User;

}