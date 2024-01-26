import { Request, Response } from 'express'
import * as cryptoUtils from '../utils/crypto.utils'
import User from '../models/users.models'
import { Validator } from '../utils/validator.utils'
import { Op } from 'sequelize'

export class UserController {
  static async listUsers(req: Request, res: Response) {
    const search = req.query.nome
    const query = '%'+search+'%'

    if(!search){
      try {
        const users = await User.findAll()
        return res.render('users', { users })
      } catch (error) {
        return res.status(500).json({ error: error })
      }
    }
    
    else{
      try{
        const users = await User.findAll({
          where: {nome: {[Op.like]: query}}
        })
        return res.render('users', { users })
      }catch (error){
        return res.status(500).json({ error: error })
      }
    }

  }

  static async createUser(req: Request, res: Response) {
    if(req.method == 'GET'){
      try {
        return res.render('createUser')
      } catch (error) {
        return res.status(500).json({ error: error })
      }
    }

    else if(req.method == 'POST'){
      const { nome, sobrenome, email, idade, cpf, password, passwordConfirm } = req.body

      const tokenGerado = await cryptoUtils.generateToken(cpf, nome, email)
      const passwordCript = await cryptoUtils.hashPassword(password)
  
      try {
        if(await Validator.validateUser(res, email, cpf, password, passwordConfirm)){
          await User.create({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            idade: idade,
            cpf: cpf,
            password: passwordCript,
            token: tokenGerado,
          })
          return res.redirect('/users')
        }
      } catch (error) {
        return res.status(500).json({ error: error })
      }
    }

  }

  static async deleteUser(req: Request, res: Response) {
    if(req.method == 'GET'){
      const userID = req.params.id
      try {
        return res.render('deleteUser', { userID })
      } catch (error) {
        return res.status(500).json({ error: error })
      }
    }

    else if(req.method == 'POST'){
      const userID = req.params.id
      try {
        await User.destroy({
          where: { id_user: userID },
        })
        return res.redirect('/users')
      } catch (error) {
        return res.status(500).json({ error: error })
      }
    }

  }
}
