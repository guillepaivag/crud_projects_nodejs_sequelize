import { request, response } from "express";
import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const createProjects = async (req=request, res=response) => {
    const { name, priority, description } = req.body

    try {
        const newProject = await Project.create({
            name, 
            priority, 
            description
        })
    
        res.json({ newProject })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getProjects = async (req=request, res=response) => {
    try {
        const projects = await Project.findAll()

        res.json({ projects })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getProject = async (req=request, res=response) => {
    const { uid } = req.params

    try {
        const project = await Project.findOne({ where: { uid } })
        if (!project) return res.status(404).json({
            mensaje: 'This project not found.'
        })

        res.json({ project })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const updateProject = async (req=request, res=response) => {
    const { uid } = req.params
    const { name, priority, description } = req.body

    try {
        const project = await Project.findByPk(uid)
        if (!project) return res.status(404).json({
            mensaje: 'This project not found.'
        })
    
        project.name = name
        project.priority = priority
        project.description = description

        await project.save()

        res.json({ project })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const deleteProject = async (req=request, res=response) => {
    const { uid } = req.params

    try {
        const project = await Project.findByPk(uid)
        if (!project) return res.status(404).json({
            mensaje: 'This project not found.'
        })

        await project.destroy()

        res.json({ projectDeleted: project })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const getTasksByUIDProject = async function (req=request, res=response) {
    const { uid } = req.params
    
    try {
        const project = await Project.findByPk(uid)

        if (!project) return res.status(404).json({ message: 'This project not found.' })

        const tasks = await Task.findAll({
            where: { projectUid: uid }
        })

        res.status(200).json({
            tasks
        })
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}