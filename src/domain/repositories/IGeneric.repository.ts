import { Request, Response } from "express";

export abstract class GenericRepository <T>{
    /**
     * @param params Entity "S"
     */
    abstract GetOne(req:Request,res:Response):Promise<T>;
    /**
     * 
     * @param params 
     */
    abstract GetAll(req:Request,res:Response):Promise<T>;
    /**
     * 
     * @param params 
     */
    abstract updateOne(req:Request,res:Response):Promise<T>;
    /**
     * 
     * @param params 
     */
    abstract DeleteOne(req:Request,res:Response):Promise<T>;
    /**
     * 
     */
    abstract Create(req:Request,res:Response):Promise<T>;

}