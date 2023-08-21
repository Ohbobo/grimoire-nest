export abstract class IGenericRepository<T> {

    abstract getAll(): Promise<T[]>;
    abstract getById(id: string): Promise<T>;
    abstract create(book: T): Promise<T>;
    abstract update(id: string, book: T);

}