import {Model, DataTypes} from 'sequelize'
import sequelize from '../database/connection.js'

class Produto extends Model {}
Produto.init(
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        quantidade: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
       sequelize,
       modelName: 'Produto',
       tableName: 'produtos_db',
       timestamps:true
    }
);

export default Produto;