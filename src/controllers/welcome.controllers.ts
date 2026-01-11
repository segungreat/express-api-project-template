import {Request as Req, Response as Res, NextFunction as NFunc} from "express";

export const welcome = async function (req: Req, res: Res) {
  return res.json({});
}
