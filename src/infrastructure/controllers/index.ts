import { Router } from "express";
import { readdirSync } from "fs";
const PATH_ROUTES = __dirname;
const router:Router=Router();
function removeExtension(filename: string): string {
  const cleanName =<string> filename.split(".").shift();
  return cleanName;
}
function loadRoute(file:string){

    const name= removeExtension(file)
    if(name !='index'){
        import(`./${file}`).then((routerModule) => {
            console.log(`Cargando rutan ${name}`);
            //TODO localhost/tracks
            router.use(`/${name}`, routerModule.router);
        });
    }
}   
readdirSync(PATH_ROUTES).filter((file) => loadRoute(file));

export default router;