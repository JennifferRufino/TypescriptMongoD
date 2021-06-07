import {Request, Response} from 'express';
import {Produto} from '../models/produtoModel';

async function show(req: Request, res: Response) {
    try{
        const product = await Produto.find({});
        return res.status(201).json(product);
    }catch(err){
        return res.status(400).json({
            message: err.message || 'Unexpected error.'  
        });
    }
}

async function findShow(req: Request, res: Response) {
    const {nome_produto, descricao_produto, quantidade_produto, preco_produto} = req.body;
    try {
        const product = await Produto.findById(req.params.id, (nome_produto: string, descricao_produto: string, quantidade_produto: number, preco_produto:number) => {
            if(nome_produto) {
                res.send(nome_produto);
            }
            if(descricao_produto) {
                res.send(descricao_produto);
            }
            if(quantidade_produto){
                res.send(quantidade_produto);
            }
            if(preco_produto) {
                res.send(preco_produto)
            }
        })
    }catch(err){
        return res.status(400).send({error: "Esse usuário não existe"})
    }
    
}

async function productDetails(req: Request, res: Response) {
    try{
        const {id} = req.params;
        const product = await Produto.findOne({_id: id});
        res.json({product});
    }catch(err) {
        res.status(400).send({error: "Usuário não existe"})
    }
}

async function createProduct(req: Request, res: Response) {
    try{
        let data = {};
        const {nome_produto, descricao_produto, quantidade_produto, preco_produto} = req.body;

        if(await Produto.findOne({nome_produto})) {
            return res.status(400).send({error: "User already exists"})
        }
        data = {nome_produto, descricao_produto, quantidade_produto, preco_produto};
        const product = await Produto.create(data);

        return res.status(200).send({product});
    }catch(err){
        return res.status(400).send({error: "Registration failed!"})
    }
}

async function removerProduct(req:Request, res: Response) {
    const {id} = req.params;

    const product = await Produto.findByIdAndDelete({_id: id});

    res.status(200).send({product})

}

async function updateProduct(req: Request, res: Response) {
    const {_id, nome_produto, descricao_produto, quantidade_produto, preco_produto} = req.body;

    const data = {nome_produto, descricao_produto, quantidade_produto, preco_produto};

    const product = await Produto.findOneAndUpdate({_id}, data,{new: true});

    res.status(200).send({product});
}

export {show, findShow, createProduct, productDetails, removerProduct, updateProduct};