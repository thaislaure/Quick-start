export interface ServiceInterface<T>{

findAll(): Promise<T[]>;
find(id: number): Promise<T>;
create(objetc: T): Promise<T>;
update(objetc: T): Promise<T>;
delete(objetc: T): Promise<T>;
}