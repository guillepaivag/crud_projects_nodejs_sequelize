import { Router } from 'express'
import { 
    createTask, 
    getTasks, 
    getTaskByUID, 
    updateTaskByUID, 
    deleteTaskByUID, 
} from '../controllers/tasks.controller.js'

const router = Router()

// CRUD Simple
router.post('/', createTask)
router.get('/', getTasks)
router.get('/:uid', getTaskByUID)
router.put('/:uid', updateTaskByUID)
router.delete('/:uid', deleteTaskByUID)

export default router