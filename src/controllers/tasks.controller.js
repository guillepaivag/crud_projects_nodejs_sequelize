import { request, response } from 'express'
import { Task } from '../models/Task.js'


export const createTask = async function (req=request, res=response) {
    const { name, done, projectUid } = req.body
    
    try {
        const newTask = await Task.create({
            name,
            done,
            projectUid
        })

        res.status(200).json({ newTask })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getTasks = async function (req=request, res=response) {
    try {
        
        const tasks = await Task.findAll()

        res.status(200).json({
            tasks
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getTaskByUID = async function (req=request, res=response) {
    const { uid } = req.params

    try {
        const task = await Task.findByPk(uid)

        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateTaskByUID = async function (req=request, res=response) {
    const { uid } = req.params
    const { name, done, projectUid } = req.body

    try {
        const task = await Task.findOne({
            where: { uid }
        })

        if (!task) return res.status(404).json({ message: 'This task not found.' })

        req.body.name ? task.name = name : ''
        req.body.done !== undefined ? task.done = done : ''
        req.body.projectUid ? task.projectUid = projectUid : ''

        await task.save()

        res.status(200).json({ taskUpdated: task })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteTaskByUID = async function (req=request, res=response) {
    const { uid } = req.params
    
    try {
        const task = await Task.findOne({
            where: { uid }
        })

        if (!task) return res.status(404).json({ message: 'This task not found.' })

        await task.destroy()

        res.status(200).json({ taskDeleted: task })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}