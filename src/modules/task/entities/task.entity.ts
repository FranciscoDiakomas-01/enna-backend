import { statusType } from "generated/prisma"

export interface Task {
  id : number
  ticketId : number
  status : statusType 
  title : string
  description : string
  owner? : number
  created : Date 
  updated : Date  
  finished : Date 
}
