import app from "./src/app.js";
import { sequelize } from './src/database/database.js'

import './src/models/Project.js'
import './src/models/Task.js'

async function main () {
    try {
        await sequelize.sync({})
    
        app.listen(1605, () => {
            console.log('Servidor corriendo: http://localhost:1605')   
        })
    } catch (error) {
        console.log('Unable to connect to the database.', error)
    }
}

main()