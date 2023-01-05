import { Request, Response } from "express";
import { IUserModel } from "../../Model/user/user.model";
import { GenericRepository } from "../IGeneric.repository";

export abstract class UserRepository extends GenericRepository<void>{
    abstract login(req:Request,res:Response):Promise<void>
}