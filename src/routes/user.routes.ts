import express from 'express'
import UserController from '../controller/user.controller'

const router = express.Router()

router.get('/', UserController.listUsers)
router.get('/new-user', UserController.createUserForm)
router.post('/new-user', UserController.createUser)

export default router
