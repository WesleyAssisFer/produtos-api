import express from 'express';
import sequelize from './database/connection.js'
import Produto from './models/Produto.js'
import produtoRotas from './routes/produtosRoutes.js'

import path from 'path'
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json());

async function rodarServidor(){
    try{
        await sequelize.authenticate();
        console.log("Banco de dados ok")
        
        await sequelize.sync({force: false});
        console.log("Model sincronizado com o BD")

        app.listen(3000, () => {
            console.log("Servidor rodando")
        })
    }catch(error){
        console.log("Erro ao conectar banco: " + error.message)
    }
}

app.use('/produtos',produtoRotas)

rodarServidor();