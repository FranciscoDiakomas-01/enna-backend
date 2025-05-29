import { userType } from "generated/prisma";

export default function IsAdminThatUser(type: userType) {
  return type == "Admin";
}
