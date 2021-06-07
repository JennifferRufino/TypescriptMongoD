import {Request, Response} from 'express';
import {User} from '../models/userModel';

async function index(req: Request, res: Response) {
    try{
        const user = await User.find({});
        return res.status(201).json(user);
    }catch(err){
        return res.status(400).json({
            message: err.message || 'Unexpected error.'  
        });
    }
}

async function findIndex(req: Request, res: Response) {
    const {nome_usuario, email_usuario, tipo_usuario, senha_usuario} = req.body;
    try {
        const user = await User.findById(req.params.id, (nome_usuario: string, email_usuario: string, tipo_usuario: number, senha_usuario:string) => {
            if(nome_usuario ) {
                res.send(nome_usuario);
            }
            if(email_usuario) {
                res.send(email_usuario);
            }
            if(tipo_usuario){
                res.send(tipo_usuario);
            }
            if(senha_usuario) {
                res.send(senha_usuario)
            }
        })
    }catch(err){
        return res.status(400).send({error: "Esse usuário não existe"})
    }
    
}

async function details(req: Request, res: Response) {
    try{
        const {id} = req.params;
        const user = await User.findOne({_id: id});
        res.json({user});
    }catch(err) {
        res.status(400).send({error: "Usuário não existe"})
    }
}

async function create(req: Request, res: Response) {
    try{
        let data = {};
        const {nome_usuario, email_usuario, tipo_usuario, senha_usuario} = req.body;

        if(await User.findOne({email_usuario})) {
            return res.status(400).send({error: "User already exists"})
        }
        data = {nome_usuario, email_usuario, tipo_usuario, senha_usuario};
        const user = await User.create(data);

        return res.status(200).send({user});
    }catch(err){
        return res.status(400).send({error: "Registration failed!"})
    }
}

async function remover(req:Request, res: Response) {
    const {id} = req.params;

    const user = await User.findByIdAndDelete({_id: id});

    res.status(200).send({user})

}

async function update(req: Request, res: Response) {
    const {_id, nome_usuario, tipo_usuario, email_usuario, senha_usuario} = req.body;

    const data = {nome_usuario, tipo_usuario, email_usuario, senha_usuario};

    const user = await User.findOneAndUpdate({_id}, data,{new: true});

    res.status(200).send({user});
}

export {index, findIndex, create, details, remover, update};