import { Book } from "../book-entities";

export class CreateBookDtoResponse {
    success: boolean;
    createdBook: Book;
}