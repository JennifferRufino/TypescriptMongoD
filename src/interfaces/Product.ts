import {Model, Document} from 'mongoose';

export interface ITodo {
    nome_produto: string;
    descricao_produto: string;
    quantidade_produto: number;
    preco_produto: number;
}

export interface todoModelInterface extends Model<TodoDoc> {
    build(attr: ITodo): TodoDoc
}

export interface TodoDoc extends Document {
    nome_produto: string;
    descricao_produto: string;
    quantidade_produto: number;
    preco_produto: number;
}