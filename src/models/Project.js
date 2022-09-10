import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Task } from './Task.js'

export const Project = sequelize.define('Projects', {
    uid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }, 
    name: {
        type: DataTypes.STRING,
    },
    priority: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true
})

Project.hasMany(Task, {
    foreignKey: 'projectUid',
    sourceKey: 'uid'
})

Task.belongsTo(Project, {
    foreignKey: 'projectUid',
    targetKey: 'uid'
})