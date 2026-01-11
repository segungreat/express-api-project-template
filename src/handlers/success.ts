import status from "http-status";
import express from "express";

type CustomSuccessResBody = object;

export class CustomSuccessRes {
     public status: number;
     public success: true
     public message: string
     public data?: CustomSuccessResBody | CustomSuccessResBody[]

     constructor(status: number, message: string, data: CustomSuccessResBody) {
          this.status = status
          this.success = true
          this.message = message
          this.data = data
     }

     // process the response
     private static Process(res: express.Response, resBody: CustomSuccessRes): CustomSuccessRes {
          res.status(resBody.status).send(resBody);
          return resBody;
     }

     static Success(res: express.Response, message: string, data: CustomSuccessResBody): CustomSuccessRes {
          return CustomSuccessRes.Process(res, new CustomSuccessRes(status.OK, message, data));
     }

     static Created(res: express.Response, message: string, data: CustomSuccessResBody): CustomSuccessRes {
          return CustomSuccessRes.Process(res, new CustomSuccessRes(status.CREATED, message, data));
     }
}
