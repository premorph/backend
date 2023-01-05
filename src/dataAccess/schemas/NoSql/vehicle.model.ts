import { Schema, Types, model } from "mongoose";
import { IVehicleDAO } from "../../models/vehicle.model";

const vehicleSchema = new Schema<IVehicleDAO>(
  {
    owner: { type: Types.ObjectId, require: true },
    type: { type: String, require: true },
    model: { type: String, require: true },
    capacity: { type: String },
    chargeCapacity: { type: String, require: true },
    plate: { type: String, require: true },
    status: { type: Boolean, require: true },
    description: { type: String, require: true },
  },
  { timestamps: true }
);
export const VehicleModel = model<IVehicleDAO>("vehicle", vehicleSchema);
