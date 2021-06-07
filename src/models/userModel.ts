import mongoose from 'mongoose';
import {ITodo, TodoDoc, todoModelInterface} from '../interfaces/User';
import bcrypt from 'bcrypt';

const dataSchema = new mongoose.Schema({
    nome_usario: String,
    email_usuario: String,
    tipo_usuario: {
        type: Number,
        default: 1
    },
    senha_usuario: String, 
}, {
    timestamps: true
})

dataSchema.statics.build = (attr: ITodo) => {
  return new User(attr)
}

dataSchema.pre<TodoDoc>('save', function(next: () => void){
    if(!this.isModified("senha_usuario")){
        return next();
    }
    this.senha_usuario = bcrypt.hashSync(this.senha_usuario, 10);
    next();
})

{/*dataSchema.pre<Query<TodoDoc, TodoDoc>>('findOneAndUpdate', function(next: () => void) {
  const password = this.getUpdate().senha_usuario + "";

  if(password.length < 55) {
    this.getUpdate().senha_usuario = bcrypt.hashSync(password, 10);
  }

  next();

})*/}

const User = mongoose.model<TodoDoc, todoModelInterface>('User', dataSchema)

export { User }