import express from 'express'
import UserController from '../controller/user.controller'

const router = express.Router()

router.get('/', UserController.listUsers)

export default router