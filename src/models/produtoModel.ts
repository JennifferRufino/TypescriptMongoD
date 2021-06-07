import mongoose from 'mongoose';
import {ITodo, TodoDoc, todoModelInterface} from '../interfaces/Product';

const produtoSchema = new mongoose.Schema({
    nome_produto: String,
    descricao_produto: String,
    quantidade_produto: {
        type: Number,
        default: 1
    },
    preco_produto: Number, 
}, {
    timestamps: true
})

produtoSchema.statics.build = (attr: ITodo) => {
  return new Produto(attr)
}

const Produto = mongoose.model<TodoDoc, todoModelInterface>('Produto', produtoSchema)

export { Produto }