import { Body, Controller, Delete, Get, Param, Patch, Post, Inject } from '@nestjs/common';
import { CreateBookDto } from './core/dto/books.dto';
import { CreateBookDtoResponse } from './core/dto/Books.dto.response';
import { BookUseCase } from './use-case/book.use-case';
import { BookFactoryService } from './use-case/book.factory.use-case';


@Controller('api/books')
export class BooksController {
    constructor(
        private readonly bookUseCase: BookUseCase,
        private readonly bookFactoyService: BookFactoryService,
    ) {}

    @Get()
    async getAllBooks() {
        return this.bookUseCase.getAllBooks();
    }

    @Get(':id')
    async getOneBook(@Param('id') id: string) {
        return this.bookUseCase.getOneBook(id);
    }

    @Post()
    async createBook(@Body() bookDto: CreateBookDto) {
        const dtoResponse = new CreateBookDtoResponse();
        try {
            const book = this.bookFactoyService.createNewBook(bookDto);
            const createdBook = await this.bookUseCase.create(book);

            dtoResponse.success = true;
            dtoResponse.createdBook = createdBook
        } catch (error) {
            throw error;
        }

        return dtoResponse;
    }

}
