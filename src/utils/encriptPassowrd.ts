import { config } from 'dotenv'
config()
import { AES } from "crypto-js";

export default function EncriptPassWord(password: string) {
  const encriptedPassword = AES.encrypt(password, process.env.ENC as string)
  return encriptedPassword.toString()
}