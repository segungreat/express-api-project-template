import express, {Request, Response, NextFunction} from "express";
import CustomError from "../handlers/error";

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

export const notFoundPage = function(_req: Request, _res: Response, next: NextFunction) {
     return next(CustomError.notFound('Resources not found ☹️☹️'));
}

export const errorHandler = function(error: Error | CustomError, req: Request, res: Response, _next: NextFunction) {
     // error = error.instance ? error.instance : error

     console.error('----------------------------------------------------------------');
     // console.error('Error triggered by', req?.user?.username ?? ' none auth user', 'with ID of', req?.user?.id, '\n\n')
     console.error(`${req?.method}: ${req?.originalUrl}`);
     console.error("Body: ", req.body || {});
     console.error(error);
     console.error('----------------------------------------------------------------');

     if (error instanceof CustomError) {
          res.status(error.status).send(error);
          return;
     }

     res.status(500).send({
          message: 'something went wrong',
          status: 500,
          success: false,
          error: error.message,
     });
}

