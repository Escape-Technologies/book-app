import { Injectable } from '@nestjs/common';
import { Knex, knex } from 'knex';

export interface User {
  id: number;
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  db: Knex;

  constructor() {
    this.db = knex({
      client: 'sqlite3',
      connection: {
        filename: 'db.sql',
        flags: ['OPEN_URI', 'OPEN_SHAREDCACHE'],
      },
    });
  }

  async createOne(email: string, password: string): Promise<User> {
    await this.db.table('users').insert({ email, password, role: 'student' });
    return await this.db.table('users').where({ email }).first();
  }

  async getOne(email: string): Promise<User | undefined> {
    return await this.db.table('users').where({ email }).first();
  }
}
