import express from 'express'
import { UserController } from '../controller/user.controller'

const router = express.Router()

// read
router.get('/', UserController.listUsers)

// create
router.get('/new', UserController.createUserForm)
router.post('/new', UserController.createUser)

// delete
router.get('/delete/:id', UserController.deleteUserForm)
router.post('/delete/:id', UserController.deleteUser)


export default router
