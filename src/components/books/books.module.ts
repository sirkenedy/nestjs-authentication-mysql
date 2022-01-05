import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books as Book } from './entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  exports: [TypeOrmModule],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
