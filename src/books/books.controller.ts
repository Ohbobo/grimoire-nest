import { Body, Controller, Delete, Get, Param, Patch, Post, Inject } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksDto } from './dto/books.dto';
import { Book } from './interface/Book';


@Controller('api/books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    //constructor(@Inject('BOOK_MODEL') private readonly bookModel: Model<Book>) {}

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

    @Delete(':id')
    deleteBook(@Param('id') id: string, ) {
        return this.booksService.deleteBook(id)
    }
}
