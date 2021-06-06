import  { NextFunction, Request, Response } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { logUncaughtExcept, logUnhandledReject } from './logger';


export class AppError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
    }
}

export const appHandleErr = (err: Error, _req: Request, res: Response, next: NextFunction): void => {
    if(err instanceof AppError) {
        res.status(err.statusCode).send(err.message);
        return;
    }
    next(err);
}

export const handleErr = (_err: Error, _req: Request, res: Response, next: NextFunction): void => {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR));
    next()
}

process.on('uncaughtException', (error: Error, origin: string) => {
    console.log('Uncaught Exception at:', error);
    logUncaughtExcept(error, origin);
  });

process.on('unhandledRejection', (reason) => {
  console.log('Unhandled Rejection at:', reason);
  logUnhandledReject();
});