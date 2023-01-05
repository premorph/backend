import { compareSync, hash } from "bcrypt"
/**
 * 
 * @param textPlain : text to request to encrypt
 */
export async function encrypt(textPlain:string){
    const textEncrypt= await hash(textPlain,10)
    return textEncrypt
}
/**
 * 
 * @param textPlain : text to request
 * @param textHash  : text  registered in database
 */
export  function compare(textPlain:string, textHash:string):boolean{
    return compareSync(textPlain,textHash)
}