import { userType } from "generated/prisma";


export  interface AuthBody {
  ownerType: userType;
  ownerId : number | string
}