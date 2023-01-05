import { ObjectId } from 'mongoose';
export interface IStorageDAO{
    fileowner:ObjectId;
    filename:string;
    url:string;
    _id?:ObjectId;
    id?:string;
}