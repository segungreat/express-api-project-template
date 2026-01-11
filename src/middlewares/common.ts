import express, {Request, Response, NextFunction} from "express";

export const setBaseUrl = function(req: Request, _res: Response, next: NextFunction) {
     req.baseUrl = `${req.protocol}://${req.headers['host']}`;
     next();
}

export const bodyLogger = function(req: Request, _res: Response, next: NextFunction) {
     const body = structuredClone(req.body)
     if (body?.password) body.password = undefined;
     console.log("Body: ", req.body ?? {});
     console.log("Query: ", req.query ?? {});
     return next();
}


