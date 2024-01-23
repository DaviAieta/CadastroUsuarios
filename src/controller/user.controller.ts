import { Request, Response } from 'express'
import User from '../models/users.models'

class UserController {
  static async listUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll()
      res.render('users', { users })
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  static async createUserForm(req: Request, res: Response) {
    try {
      res.render('createUser')
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const { nome, sobrenome, email, idade, cpf, password, passwordConfirm } =
        req.body

      console.log(nome, sobrenome, email, idade, cpf, password) // Adicione esta linha
      if (password === passwordConfirm) {
        await User.create({ nome, sobrenome, email, idade, cpf, password })
      }

      res.redirect('/users')
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }
}

export default UserController
