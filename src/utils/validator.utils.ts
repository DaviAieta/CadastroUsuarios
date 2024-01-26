import { cpf as CPF } from 'cpf-cnpj-validator'
import User from '../models/users.models'

export class Validator {
  static async cpfValid(cpf: any): Promise<boolean> {
    const existingCPFUser = await User.findOne({where: {cpf: cpf}})
    if(!existingCPFUser){
      if(CPF.isValid(cpf)){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }

  static async emailValid(email:any): Promise<boolean>{
    const existingEmailUser = await User.findOne({where: {email: email}})
    if(!existingEmailUser){
      return true
    }else{
      return false
    }
  }

  static async passwordValid(password: any, passwordConfirm: any,): Promise<boolean> {
    const passwordConditions = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)

    if (passwordConditions) {
      if (password === passwordConfirm) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  static async validateUser(res: any, email: any, cpf: any,
    password: any, passwordConfirm: any){
                              
    const isCPFValid = await Validator.cpfValid(cpf)
    const isPasswordValid = await Validator.passwordValid(password, passwordConfirm)
    const isEmailValid = await Validator.emailValid(email)

    if(!isCPFValid) {
      res.status(400).json({ error: 'CPF Inválido ou Já cadastrado' })
      return false
    }

    if(!isPasswordValid) {
      res.status(400).json({error: 'Senha inválida. Certifique-se de que atende aos critérios.'})
      return false
    }

    if(!isEmailValid){
      res.status(400).json({error: 'E-mail Inválido ou Já cadastrado'})
      return false
    }
    return true
  }
}