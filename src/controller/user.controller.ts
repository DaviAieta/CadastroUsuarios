import { Request, Response } from 'express'
import User from '../models/users.models'

class UserController {
  static async listUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll()

      res.render('users', { users })
    } catch (error) {
      res.status(500).json('error at find users')
    }
  }
}

export default UserController
