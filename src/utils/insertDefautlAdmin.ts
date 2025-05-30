import { config } from "dotenv";
import dataBase from "src/config/database";
import IUser from "src/modules/user/entities/user.entity";
import EncriptPassWord from "./encriptPassowrd";

config();

export async function isertDefaultAdmin() {
  const defaultADMIM: Omit<IUser, "sectorid" | "id"> = {
    bio: "Admin do sistema da Enna",
    email: process.env.ADMINEMAIL as string,
    lastname: "Diakomas",
    name: "Francisco",
    tel: process.env.ADMINTEL as string,
    type: "Admin",
    password: process.env.ADMINPASSWORD as string,
  };
  
  const hasAdmin = await dataBase.user.count({
    where: {
      type: "Admin",
    },
  });
  if (hasAdmin == 0) {
    const createdAdmin = await dataBase.user.create({
      data: {
        name: defaultADMIM.name,
        lastname: defaultADMIM.lastname,
        email: defaultADMIM.email,
        tel: defaultADMIM.tel,
        type: defaultADMIM.type,
        bio: defaultADMIM.bio,
        password: EncriptPassWord(defaultADMIM.password),
      },
      select: {
        id: true,
      },
    });

    if (createdAdmin && createdAdmin?.id) {
      return {
        message: "Admin criado com sucesso",
      };
    }
    return {
      message: "Erro ao criar o admin",
    };
  } else {
    return {
      message: "Admin já existe",
    };
  }
}
