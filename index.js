import app from "./src/app.js";
import { sequelize } from './src/database/database.js'

import './src/models/Project.js'
import './src/models/Task.js'

async function main () {
    try {
        await sequelize.sync({force: false})
    
        app.listen(3000, () => {
            console.log('Servidor corriendo: http://localhost:3000')   
        })
    } catch (error) {
        console.log('Unable to connect to the database.', error)
    }
}

main()