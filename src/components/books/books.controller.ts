import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Books as Book } from './entities/book.entity';
import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    let book = await this.booksService.findOne(+id)
    if(book) return res.status(HttpStatus.OK).json(book)
    return res.status(HttpStatus.NOT_FOUND).json({"error" : "This resource  no longer exist or has been removed"})
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto, @Res() res: Response) {
    const response = await this.booksService.update(+id, updateBookDto);
    if(response) return res.status(HttpStatus.OK).json({"message" : "Book information updated successfully"});
    return res.status(HttpStatus.NOT_FOUND).json({"error" : "The resource to be updated no longer exist"})
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.booksService.remove(+id);
    res.status(HttpStatus.OK).json({"message" : "Book details deleted successfully"});
  }
}
