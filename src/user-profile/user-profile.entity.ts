import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('user_profile')
export class UserProfile {

  @PrimaryGeneratedColumn('uuid', {
    name: 'profile_id'
  })
  profileId: string;

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

}