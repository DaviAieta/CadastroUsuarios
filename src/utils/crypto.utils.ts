import bcrypt from 'bcrypt'

export async function generateToken(
  param1: string,
  param2: string,
  param3: string,
): Promise<string> {
  const tokenScript = param1 + param2 + param3
  return bcrypt.hash(tokenScript, 10)
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}
