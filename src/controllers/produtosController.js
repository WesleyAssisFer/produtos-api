import Service from '../services/produtoService.js';

class ProdutoController {
    getAll = async (req, res) => {
        try{
            const produto =  await Service.getAllProdutos();

            if(produto.length === 0){
                return res.status(404).json({
                    mensagem: "Produto não encontrado"
                })
            }
            res.status(200).json(produto)
        }catch(error){
            res.status(500).json({
                mensagem: error.message
            })
        }
    };
   getById = async(req, res) => {
    try{
        const {id} = req.params;
        const produto = await Service.getByIdProduto(id);

        res.status(200).json(produto);
    }catch(error){
        res.status(500).json({
            mensagem: error.message
        })
    }
   };
   create = async(req, res) => {
    try{
        const dados = req.body;
        const produto = await Service.createProduto(dados);

        res.status(201).json(produto);
    }catch(error){
        res.status(500).json({
            mensagem: error.message
        })
    }
   };
   update = async(req, res) =>{
    try{
        const {id} = req.params;
        const dados = req.body;
        const produto = await Service.updateProduto(id, dados);
        res.status(200).json(produto)
    }catch(error){
        res.status(500).json({
            mensagem: error.message
        })
    }
   }
   delete = async(req, res) =>{
    try{
        const {id} = req.params;
        const produto = await Service.deletarProduto(id);
        res.status(200).json({
            mensagem: "produto deletado com sucesso"
        });
    }catch(error){
        res.status(500).json({
            mensagem: error.message
        })
    }
   }
}

export default new ProdutoController();
