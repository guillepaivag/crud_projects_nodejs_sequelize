import { Router } from 'express'
import { getProjects, createProjects, updateProject, deleteProject, getProject } from '../controllers/projects.controller.js'

const router = Router()


router.post('/', createProjects)
router.get('/', getProjects)
router.get('/:uid', getProject)
router.put('/:uid', updateProject)
router.delete('/:uid', deleteProject)


export default router