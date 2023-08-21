import { Book } from "../book-entities";
import { IGenericRepository } from "../repository/generic-repository";

export abstract class IDataServices {

    abstract books : IGenericRepository<Book>;

}