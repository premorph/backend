import { ObjectId } from "mongoose";
export interface IVehicleDAO {
  _id?: ObjectId;
  id?: string;
  owner: ObjectId;
  type: string;
  model: string;
  capacity?: string;
  chargeCapacity?: string;
  plate: string;
  status: boolean;
  description: string;
}
