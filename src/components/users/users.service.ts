import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Users as User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

  async findOne(data: number | any): Promise<User | undefined> {
    return await this.usersRepository.findOne(data);
  }

  async create(data)  {
    return await this.usersRepository.save(data).then(res => res).catch(e => console.log(e));
  }
}
