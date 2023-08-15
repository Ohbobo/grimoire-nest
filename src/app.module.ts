import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.DATABASE_URL,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    }),
    BooksModule,
    DatabaseModule,
  ],
})
export class AppModule {}
