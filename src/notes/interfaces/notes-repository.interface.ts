import { Note } from '../entities/note.entity';

export interface INotesRepository {
    mostrarTodos(): Promise<Note[]>;
    mostrarUno(id: string): Promise<Note>;
    crear(note: Partial<Note>): Promise<Note>;
    actualizar(id: string, note: Partial<Note>): Promise<Note>;
    eliminar(ids: string[]): Promise<void>; 
}