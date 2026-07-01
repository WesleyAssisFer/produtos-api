import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('produtos_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

export default sequelize;

