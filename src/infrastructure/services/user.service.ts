import { UserModel } from "./../../dataAccess/schemas/NoSql/user.model";
import { Request, Response } from "express";
import { UserRepository } from "../../domain/repositories/user/user.repository";
import { matchedData } from "express-validator";
import { JwtSign, compare, encrypt } from "../base";
import httpStatus from "http-status";
import { httpResponse } from "../base/httpError";

export class UserService implements UserRepository {
  async login(req: Request, res: Response): Promise<void> {
    const body = matchedData(req, { locations: ["body"] });
    const user = await UserModel.findOne({ email: body.email });
    const ischeckPassword = compare(body.password, user!.password);
    if (ischeckPassword) {
      const data = {
        user,
        token: await JwtSign(user),
      };
      httpResponse({ res, data, code: httpStatus.OK, ok: true });
    }
    httpResponse({ res, code: httpStatus.OK, ok: true, data: null });
  }
  async GetOne(req: Request, res: Response): Promise<void> {
    try {
      const param = matchedData(req, { locations: ["params"] });
      const user = await UserModel.findOne({ param });
      if (user) {
        httpResponse({ res, data: user, code: httpStatus.OK, ok: true });
      }
      httpResponse({ res, code: httpStatus.OK, ok: true, data: null });
    } catch (error: any) {
      httpResponse({
        res,
        code: httpStatus.OK,
        ok: true,
        data: null,
        message: error.message,
      });
    }
  }
  /**
   *
   * @param params
   */
  async GetAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await UserModel.find();
      httpResponse({ res, data, code: httpStatus.OK, ok: true });
    } catch (error: any) {
      httpResponse({
        res,
        code: httpStatus.INTERNAL_SERVER_ERROR,
        ok: true,
        data: null,
        message: error.message,
      });
    }
  }
  /**
   *
   * @param params
   */
  async updateOne(req: Request, res: Response): Promise<void> {
    try {
      const param = matchedData(req, { locations: ["params"] });
      const body = matchedData(req, { locations: ["body"] });

      const user = await UserModel.findByIdAndUpdate({ _id: param, body });
      if (user) {
        httpResponse({ res, data: user, code: httpStatus.OK, ok: true });
      }
      httpResponse({ res, code: httpStatus.OK, ok: true, data: null });
    } catch (error: any) {
      httpResponse({
        res,
        code: httpStatus.INTERNAL_SERVER_ERROR,
        ok: true,
        data: null,
        message: error.message,
      });
    }
  }
  /**
   *
   * @param params
   */
  async DeleteOne(req: Request, res: Response): Promise<void> {
    try {
      const param = matchedData(req, { locations: ["params"] });

      const user = await UserModel.findByIdAndUpdate({ _id: param });
      if (user) {
        httpResponse({ res, data: user, code: httpStatus.OK, ok: true });
      }
      httpResponse({ res, code: httpStatus.OK, ok: true, data: null });
    } catch (error: any) {
      httpResponse({
        res,
        code: httpStatus.INTERNAL_SERVER_ERROR,
        ok: true,
        data: null,
        message: error.message,
      });
    }
  }
  /**
   *
   */
  async Create(req: Request, res: Response): Promise<void> {
    try {
      const body = matchedData(req, { locations: ["body"] });
      const password = await encrypt(body.password);
      const data = {
        ...body,
        password,
      };
      const user = await UserModel.create(data);
      const payload = {
        user,
        token: await JwtSign(user),
      };
      httpResponse({ res, data: payload, code: httpStatus.OK, ok: true });
      httpResponse({ res, code: httpStatus.OK, ok: true, data: null });
    } catch (error: any) {
      httpResponse({
        res,
        code: httpStatus.INTERNAL_SERVER_ERROR,
        ok: true,
        data: null,
        message: error.message,
      });
    }
  }
}
