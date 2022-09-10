import { Sequelize } from 'sequelize'

// database, username, password, {host, dialect}
export const sequelize = new Sequelize('projectsdb', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',
})