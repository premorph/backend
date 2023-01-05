import { ObjectId } from 'mongoose';
export interface IUserModel {
    id?: string;
    _id?:ObjectId
    fullName: string;
    username: string;
    email?: string;
    phoneNum: string;
    createdAt?: Date;
    profilePicture: string;
    activationStatus: boolean;
    role:string
}