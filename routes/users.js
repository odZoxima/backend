import express from "express"
import {createUser, getUser, getUserById, deleteUserById, updateUserById} from "../controllers/users.js"

const router = express.Router()

router.get('/', getUser)
router.get('/:id', getUserById)
router.post('/', createUser)
router.delete('/:id', deleteUserById)
router.patch('/:id', updateUserById)

export default router