import { Request, Response } from 'express'
import User from '../models/users.models'

class UserController {
  static async listUsers(req: Request, res: Response) {
    try {
      const users = await User.find()

      res.status(200).json({ users })
    } catch (error) {
      res.status(500).json({ error: 'error at listUsers' })
    }
  }
}

export default UserController
