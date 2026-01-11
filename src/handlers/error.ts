import status from 'http-status';


export enum CustomMessageCode {
     InvalidAccessToken = "access-token-expired",
     InvalidRequestBody = "invalid-request-body",
     InvalidRequestQuery = "invalid-request-query",
     InvalidLoginCredentials = "invalid-login-credentials",
     ExpiredOrInvalidRefereshToken = "expired-or-invalid-refresh-token",
     AuthenticationRequired = "authentication-required",
     AccountDeletedByAdmin = "account-deleted",
     NagativeAMountFieldNotAllowed = "nagative-amount-field-not-allowed"
}

interface ErrorConstructorBody {
     statusCode: number,
     statusMessage: string,
     message: string
     error?: { [key: string]: object }
     code: CustomMessageCode
     success?: boolean
}


class CustomError {
     public status: number
     public statusMessage: string
     public message: string
     public success: boolean
     public error?: { [key: string]: object }
     public code: string

     constructor(body: ErrorConstructorBody) {
          this.status = body.statusCode
          this.statusMessage = body.statusMessage
          this.message = body.message
          this.code = body.code
          this.success = false
          this.error = body.error
     }

     static badRequest(message: string, code?: CustomMessageCode, error?: { [key: string]: any }) {
          return new CustomError({
               statusCode: status.BAD_REQUEST,
               statusMessage: 'Bad Request!',
               message,
               error,
               code: code,
          } as ErrorConstructorBody)
     }

     static unsuportedMediaTypeError(message: string, code?: CustomMessageCode, error?: { [key: string]: any }) {
          return new CustomError({
               statusCode: status.UNSUPPORTED_MEDIA_TYPE,
               statusMessage: 'Unsupported Media Type',
               message,
               error,
               code
          } as ErrorConstructorBody)
     }

     static paymentRequiredError(message: string, code?: CustomMessageCode, error?: { [key: string]: any }) {
          return new CustomError({
               statusCode: status.PAYMENT_REQUIRED,
               statusMessage: 'Payment Required!',
               message,
               error,
               code
          } as ErrorConstructorBody)
     }

     static notFound(message: string, code?: CustomMessageCode, error?: { [key: string]: any }) {
          return new CustomError({
               statusCode: status.NOT_FOUND,
               statusMessage: 'Not Found!',
               message: message,
               error: error,
               code
          } as ErrorConstructorBody)
     }

     static unauthorizedRequest(message: string, code?: CustomMessageCode, error?: { [key: string]: any }) {
          return new CustomError({
               statusCode: status.UNAUTHORIZED,
               statusMessage: 'Unauthorized Request!',
               message,
               error,
               code
          } as ErrorConstructorBody)
     }

     static continueRequest(message: string, code?: CustomMessageCode, error?: { [key: string]: any }) {
          return new CustomError({
               statusCode: status.CONTINUE,
               statusMessage: 'Continue!',
               message,
               error,
               code
          } as ErrorConstructorBody)
     }

     static requestTimeout(message: string, code?: CustomMessageCode, error?: { [key: string]: any }) {
          return new CustomError({
               statusCode: status.REQUEST_TIMEOUT,
               statusMessage: 'Request Timeout',
               message,
               error,
               code
          } as ErrorConstructorBody)
     }

     static internalServerError(message: string, code?: CustomMessageCode, error?: { [key: string]: any }) {
          return new CustomError({
               statusCode: status.INTERNAL_SERVER_ERROR,
               statusMessage: 'Internal Server Error!',
               message,
               error,
               code
          } as ErrorConstructorBody)
     }

     static forbiddenRequest(message: string, code?: CustomMessageCode, error?: { [key: string]: any }) {
          return new CustomError({
               statusCode: status.FORBIDDEN,
               statusMessage: 'Forbidden Request',
               message,
               error,
               code
          } as ErrorConstructorBody)
     }

     static serviceUnavailable(message: string, code?: CustomMessageCode, error?: { [key: string]: any }) {
          return new CustomError({
               statusCode: status.SERVICE_UNAVAILABLE,
               statusMessage: 'Service Unavailable',
               message,
               error,
               code
          } as ErrorConstructorBody)
     }

     static tooManyRequest(message: string, code?: CustomMessageCode, error?: { [key: string]: any }) {
          return new CustomError({
               statusCode: status.TOO_MANY_REQUESTS,
               statusMessage: 'Too many requests',
               message,
               error,
               code
          } as ErrorConstructorBody)
     }
}

export default CustomError
