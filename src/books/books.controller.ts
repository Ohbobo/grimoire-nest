import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksDto } from './dto/books.dto';
import { Book } from './interface/Book';

@Controller('api/books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    getAllBooks(): Book[] {
        return this.booksService.findAll();
    }

    @Get(':id')
    getOneBook(@Param('id') id: string) {
        return this.booksService.findOneBook(id)
    }

    @Post()
    addBook(@Body() newBook: BooksDto) {
        this.booksService.createBook(newBook)
    }

    @Patch(':id')
    modifyBook(@Param('id') id: string, @Body() book: BooksDto) {
        return this.booksService.updateBook(id, book)
    }
}
