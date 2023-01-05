import { BackendBootstrap } from "./BackofficeBackendApp";
try{
new BackendBootstrap().start().catch(handleError)
}catch(e){
    handleError(e)
}

function handleError(e:any){
    console.log(e);
    process.exit(1)
}