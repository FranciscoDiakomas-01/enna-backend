import { priorityType, statusType } from "generated/prisma";

type ITicket = {
  id: number;
  title: string;
  description: string;
  sectorid: number;
  status: statusType;
  priority: priorityType;
  created: Date;
  finished: Date;
  updated: Date;
};

export default ITicket