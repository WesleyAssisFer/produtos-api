import Produto from '../models/Produto.js';

class ProdutoService{
    async getAllProdutos() {
        const listarTodos = await Produto.findAll();
        return listarTodos;
    }
    async getByIdProduto(id){
        const listarPorId = await Produto.findByPk(id);

        if(!listarPorId){
            throw new Error("Produto não encontrado")
        }
        return listarPorId;
    }
    async createProduto(dados){
        const criarProduto = await Produto.create(dados);
        return criarProduto;
    }
    async updateProduto(id, dados) {
      const produto = await Produto.findByPk(id);
     
      if(!produto){
        throw new Error("Produto não encontrado")
      }

      const atulizaProduto = await produto.update(dados)
      return atulizaProduto;
    }
    async deletarProduto(id){
        const produto = await Produto.findByPk(id);

        if(!produto){
            throw new Error("Produto não encontrado")
        }
        await produto.destroy();
        return console.log(`Produto de id ${id} excluido com sucesso`)
    }
}

export default new ProdutoService();