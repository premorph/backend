import { Schema, model } from "mongoose";
import { IUserDAO } from "../../models";

const userSchema = new Schema<IUserDAO>(
  {
    fullName: { type:String, required:true},
    email: {type:String, required:true},
    username: {type:String, required:true},
    password:{type:String,required:true},
    profilePicture: {type:String},
    phoneNum: {type:String, required:true},
    activationStatus: {type:Boolean, default:true, required:true},
    role:{type:['admin','user','crane','staft'], default:'user'}
  },
  { timestamps: true }
);
export const UserModel = model<IUserDAO>('user',userSchema);