import express, { Request, Response } from 'express'
import User from '../models/users.models'

class AuthController {
  static async registerForm(req: Request, res: Response) {
    try {
      res.render('register')
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  static async register(req: Request, res: Response) {
    try {
      // const { nome, sobrenome, email, idade, password } = req.body
      // await User.create({ nome, sobrenome, email, idade, password })
      // res.redirect('/users')
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }
}
