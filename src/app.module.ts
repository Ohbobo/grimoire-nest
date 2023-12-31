import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BooksModule, AuthModule],
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