import { config } from 'dotenv'
config()
import { AES  , enc } from "crypto-js";

export default function DecriptPassword(password: string) {
  const encriptedPassword = AES.decrypt(password, process.env.ENC as string)
  return encriptedPassword.toString(enc.Utf8)
}