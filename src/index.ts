import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connection from './database/mongoose';
import {TodoRouter} from './routes';

const app = express();

connection();

const port = process.env.PORT || 3333;
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(TodoRouter);

app.listen(port, function() {
    console.log(`🔥 Serve is running on port ${port}`)
});

