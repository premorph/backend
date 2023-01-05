import { Schema, Types, model } from 'mongoose';
import { IStorageDAO } from '../../models/storage.model';
const storageSchema=new Schema<IStorageDAO>({
    fileowner:{types:Types.ObjectId, require:true},
    filename:{types:String, require:true},
    url:{types:String, require:true},
})
export const StorageModel = model<IStorageDAO>('storage',storageSchema)