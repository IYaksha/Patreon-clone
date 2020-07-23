import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinTable, JoinColumn, OneToMany } from "typeorm";
import { UserProfile} from "src/user-profile/user-profile.entity";
import { Platform } from "src/platform/platform.entity";
import { platform } from "os";

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

  @OneToMany(type => Platform, platform => platform.user)
  platforms: Platform[]

}