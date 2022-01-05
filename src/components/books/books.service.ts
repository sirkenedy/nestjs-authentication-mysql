import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Books as Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async create(data: object)  {
    return await this.booksRepository.save(data).then(res => res);
  }

  findAll(): Promise<Book[]> {
    return this.booksRepository.find()
  }

  findOne(id: number): Promise<Book> {
    return this.booksRepository.findOne(id);
  }

  async update(id:number, data: object): Promise<Book | UpdateResult | undefined> {
    const book = await this.findOne(id).then(res =>res);
    if(book) return await this.booksRepository.update(id, data).then(res => res);
    return ;
  }

  async remove(id: number) {
    return await this.booksRepository.delete(id);
  }
}
