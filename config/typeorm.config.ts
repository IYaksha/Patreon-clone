import { User } from "src/users/user.entity";

export const typeOrmConfig: any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'admin',
  password: 'root',
  database: 'patreon',
  entities: [User],
  synchronize: true,
}

