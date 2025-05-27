import { v4 as uuidv4 } from 'uuid'

export function generateUUID(){
  const uuID = uuidv4()
  return uuID
}