import { EntitySchema } from 'typeorm';
import { User } from './user.entity';

export const UserSchema = new EntitySchema<User>({
  name: 'user',
  target: User,
  columns: {
    id: {
      name: 'user_id',
      type: String,
      primary: true,
      generated: true
    },
    email: {
      name: 'email',
      type: String,
    },
    password: {
      name: 'password',
      type: String
    }
  }
})