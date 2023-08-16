import { Mongoose } from 'mongoose';
import { BookSchema } from './schema/books.schema';

export const booksProviders = [{
    provide: 'BOOK_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Book', BookSchema),
    inject: ['DATABASE_CONNECTION'],
}]