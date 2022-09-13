import { Router } from 'express'
import { 
    createProjects, 
    getProjects, 
    getProject, 
    updateProject, 
    deleteProject, 

    getTasksByUIDProject, 
} from '../controllers/projects.controller.js'

const router = Router()

// 
router.post('/', createProjects)
router.get('/', getProjects)
router.get('/:uid', getProject)
router.put('/:uid', updateProject)
router.delete('/:uid', deleteProject)

// Otros endpoints
router.get('/tasks/:uidProject', getTasksByUIDProject)


export default router