import { userType } from './../../../../generated/prisma/index.d';

type IUser = {
  id : number
  name : string
  lastname : string
  email : string
  tel : string
  password : string
  bio: string
  type : userType
  sectorid : number
}

export default IUser