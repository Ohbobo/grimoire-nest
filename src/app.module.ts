import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';

@Module({
  imports: [BooksModule],
})
export class AppModule {}

// MongooseModule.forRootAsync({
//   useFactory: () => ({
//     uri: process.env.DATABASE_URL,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
// }),
// DatabaseModule,