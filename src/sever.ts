import express, {NextFunction, Request, Response, Router} from 'express'
import http from 'http';
import helmet from 'helmet'
import cors from 'cors';
import httpStatus from 'http-status'
export class Server{
    private express:express.Express;
    readonly port:string;
    httpServer?:http.Server;
    constructor(port:string){
        this.port=port;
        this.express=express();
        this.express.use(express.json);
        this.express.use(express.urlencoded({extended:true}));
        this.express.use(helmet.xssFilter())
        this.express.use(helmet.noSniff())
        this.express.use(helmet.hidePoweredBy());
        this.express.use(helmet.frameguard({action:'deny'}));
        const router = Router()
        router.use(cors());
        this.express.use(router)

        router.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
           res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
        })
    }
    async listen():Promise<void>{
        return new Promise(resolve=>{
            this.httpServer= this.express.listen(this.port,()=>{
                console.log(`^Backoffice backend app is running at http://localhost:${this.port} in ${this.express.get('env')} mode`);
                console.log(' Press CTRL-C to stop \n');         
                resolve()       
            })
        })
    }
    getHTTPServer(){
        return this.httpServer;
    }
    async stop(): Promise<void>{
        return new Promise((resolve,reject)=>{
            if(this.httpServer){
                this.httpServer.close(error=>{
                    if(error){
                        return reject(error)
                    }
                    return resolve()
                });
            }
            return resolve
        });
    }
}