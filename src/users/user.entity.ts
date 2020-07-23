import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { UserProfile} from "src/user-profile/user-profile.entity";

@Entity('user')
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'profile_id', nullable: true })
  profileId: string

  @OneToOne(() => UserProfile)
  profile: UserProfile

}