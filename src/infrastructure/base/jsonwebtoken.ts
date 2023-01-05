import { sign } from "jsonwebtoken";
import { IUserModel } from "../../domain/Model/user/user.model";
import { getProperties } from "./PropertiesEngine";
const propertiesKey = getProperties();
export async function JwtSign(user: IUserModel|any) {
  return sign(
    {
      [propertiesKey.id]: user[propertiesKey.id],
      role: user.role,
    },
    "seed-hard",
    {
      expiresIn: "2h",
    }
  );
}
export async function verifyToken(token:string){
    try{

    }catch(e){

    }
}