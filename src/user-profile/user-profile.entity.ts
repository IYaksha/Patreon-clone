import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "src/users/user.entity";

@Entity('user_profile')
export class UserProfile {

  @PrimaryGeneratedColumn('uuid', {
    name: 'profile_id'
  })
  id: string;

  @Column({
    name: 'first_name',
    type: 'varchar',
    length: 50
  })
  firstName: string;

  @Column({
    name: 'middle_name',
    type: 'varchar',
    length: 50
  })
  middleName: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 50
  })
  lastName: string;

  @OneToOne(type => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

}