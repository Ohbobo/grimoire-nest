import { Injectable, NotFoundException } from '@nestjs/common';
import { BooksDto } from './dto/books.dto';
import { Book } from './interface/Book';

@Injectable()
export class BooksService {

    books: Book[] = [
        {
            id: "1",
            // title: "test",
            // description: "dzdzdzdz",
            // author: "efefeffe",
            // year: 2008,
            // genre: "action",
            // ratings: [{
            //     userId: "1",
            //     grade: 4,
            // }],
            // averageRating: 5
        }
    ]

    findAll(): Book[] {
        return this.books;
    }

    findOneBook(id: string) {
        return this.books.find(book => book.id === id)
    }

    createBook(book: BooksDto) {
        this.books = [...this.books, book as Book]
    }

    updateBook(id: string, book: Book) {
        const bookUpdate = this.books.find(book => book.id === id)

        if(!bookUpdate) {
            return new NotFoundException('Livre non trouvé')
        }

        if(book.id) {
            bookUpdate.id = book.id
        }

        const updatedBook = this.books.map(book => book.id !== id ? book : updatedBook);
        this.books = [... updatedBook]
        return { updated : 1, book: updatedBook }
    }

}
