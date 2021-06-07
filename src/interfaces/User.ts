import {Model, Document} from 'mongoose';

export interface ITodo {
    nome_usario: string;
    email_usuario: string;
    tipo_usuario: number;
    senha_usuario: string;
}

export interface todoModelInterface extends Model<TodoDoc> {
    build(attr: ITodo): TodoDoc
}

export interface TodoDoc extends Document {
    nome_usario: string;
    email_usuario: string;
    tipo_usuario: number;
    senha_usuario: string;
}