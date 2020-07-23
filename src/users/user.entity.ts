import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinTable, JoinColumn } from "typeorm";
import { UserProfile} from "src/user-profile/user-profile.entity";

@Entity('user')
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @OneToOne(type => UserProfile)
  @JoinColumn({ name: 'profile_id' })
  profile: UserProfile;

}