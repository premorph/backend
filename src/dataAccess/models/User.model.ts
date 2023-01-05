import { ObjectId } from "mongoose";

export interface IUserDAO{
    id?: string;
    _id?:ObjectId
    fullName: string;
    username: string;
    password:string;
    email?: string;
    phoneNum: string;
    createdAt?: Date;
    profilePicture: string;
    activationStatus: boolean;
    role:any
}