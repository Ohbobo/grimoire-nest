import { Injectable } from '@nestjs/common';
import { Book } from '../core/book-entities';
import { CreateBookDto, UpdatedBookDto } from '../core/dto/books.dto';

@Injectable()
export class BookFactoryService {
    createNewBook(createNewBook: CreateBookDto) {
        const newBook = new Book();
        newBook.title = createNewBook.title;
        newBook.author = createNewBook.author;
        newBook.genre = createNewBook.genre;
        newBook.date = createNewBook.date;

        return newBook;
    }

    updateBook(updatedDto: UpdatedBookDto) {
        const newBook = new Book();
        newBook.title = updatedDto.title;
        newBook.author = updatedDto.author;
        newBook.genre = updatedDto.genre;
        newBook.date = updatedDto.date;

        return newBook;
    }
}