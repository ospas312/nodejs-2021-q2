import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { AppError } from "./handleErrors";
import { User } from "../entitys/user.entity";

import { config } from '../common/config';

const { JWT_SECRET_KEY } = config;

export interface TokenInterface {
    userId: string;
    login: string;
}

const auth = (async (req: Request, _res: Response, next: NextFunction) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
  
    try {
        const userRepository = getRepository(User);
        let token = req.headers.authorization;
        if (token && token.indexOf('Bearer ') === 0) {
            token = token.slice(7, token.length);
        } 
        console.log('1',token)
        if (!token) {
            throw new Error('Not authorized1');
        }
        console.log('2',token)
        console.log(JWT_SECRET_KEY)
        const payload = jwt.verify(token, JWT_SECRET_KEY) as TokenInterface;

        if (!payload || !payload.userId) {
            throw new Error('Not authorized2');
        }
  
        const user = await userRepository.findOne(payload.userId);
        if (!user) throw new Error('Not authorized to access this resource. Token is not valid');

        } catch (error) {
             throw new AppError(error.message, StatusCodes.UNAUTHORIZED);
        }
  
    return next();
});

  export default auth;