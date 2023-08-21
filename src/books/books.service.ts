import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './core/book-entities';
import { IDataServices } from './core/data/data-service';
import { CreateBookDto } from './core/dto/books.dto';
import { CreateBookDtoResponse } from './core/dto/Books.dto.response';

@Injectable()
export class BooksService {
    constructor(private dataServices: IDataServices) {}

    async createBook(book: Book): Promise<Book> {
        try {
            const createBook = await this.dataServices.books.create(book);
            return createBook;
        } catch (error) {
            throw error;
        }
    }

    async findAll(): Promise<Book[]> {
        try {
            const books = await this.dataServices.books.getAll();
            return books;
        } catch (error) {
            throw error;
        }
    }

    async findOneBook(id: string): Promise<Book> {
        try {
            const book = await this.dataServices.books.getById(id);
            if(!book){
                throw new NotFoundException('Livre non trouvé');
            }
            return book;
        } catch (error) {
            throw error;
        }
    }


}


    // findOneBook(id: string) {
    //     return this.books.find(book => book.id === id)
    // }

    // createBook(book: BooksDto) {
    //     this.books = [...this.books, book as Book]
    // }

    // updateBook(id: string, book: Book) {
    //     const bookUpdate = this.books.find(book => book.id === id)

    //     if(!bookUpdate) {
    //         return new NotFoundException('Livre non trouvé')
    //     }

    //     if(book.id) {
    //         bookUpdate.id = book.id
    //     }

    //     const updatedBook = this.books.map(book => book.id !== id ? book : updatedBook);
    //     this.books = [... updatedBook]
    //     return { updated : 1, book: updatedBook }
    // }

    // deleteBook(id: string) {
    //     this.books = [...this.books.filter(book => book.id !== id)]
    // }