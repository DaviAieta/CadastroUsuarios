import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
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
    const { nome, sobrenome, email, idade, cpf, password, passwordConfirm } = req.body
    if (password === passwordConfirm) {
      const tokenScript = cpf + email + nome
      const tokenGerado = await bcrypt.hash(tokenScript, 10)
      const passwordCript = await bcrypt.hash(password, 10)

      console.log(tokenGerado, passwordCript)
      
      try {
        await User.create({
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          idade: idade,
          cpf: cpf,
          password: passwordCript,
          token: tokenGerado,
        })
        res.redirect('/users')
      } catch (error) {
        res.status(500).json({ error: error })
      }
    }
  }
}

export default UserController
