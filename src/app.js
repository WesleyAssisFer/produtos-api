import express from 'express';
import sequelize from './database/connection.js'
import Produto from './models/Produto.js'

const app = express();

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

rodarServidor();