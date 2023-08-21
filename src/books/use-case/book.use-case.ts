import { Injectable } from '@nestjs/common';
import { Book } from '../core/book-entities';
import { IDataServices } from '../core/data/data-service';

@Injectable()
export class BookUseCase {
    constructor(private repository: IDataServices) {}

    getAllBooks(): Promise<Book[]> {
        return this.repository.books.getAll();
    }

    getOneBook(id: string): Promise<Book> {
        return this.repository.books.getById(id);
    }

    async create(book: Book): Promise<Book> {
        try {
            const createBook = await this.repository.books.create(book);
            return createBook;
        } catch (error) {
            throw error;
        }
    }
}