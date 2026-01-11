import {Request as Req, Response as Res, NextFunction as NFunc} from "express";
import { CustomSuccessRes } from "../handlers/success";

export const welcome = async function (req: Req, res: Res) {
  return CustomSuccessRes.Success(res, 'Welcome to express project template', {});
  // return res.json('Welcome to express project template');
}
