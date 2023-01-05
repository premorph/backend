import { Response } from "express";
/**
 * 
 * @param res Reponse
 * @param data payload
 * @param code http Code
 * @param ok boolean response
 * @param message info menssage
 */
export function httpResponse(
  param:{res: Response,
  code: number,
  ok: boolean,
  data?: any,
  message?: string}
) {
    const {res}=param
  res.status(param.code);
  res.send({ okey:param.ok, payload:param.data, message:param.message });
}
