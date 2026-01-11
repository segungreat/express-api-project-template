import express, {Request, Response, NextFunction} from "express";

export const setBaseUrl = function(req: Request, _res: Response, next: NextFunction) {
     req.baseUrl = `${req.protocol}://${req.headers['host']}`
     next()
}


