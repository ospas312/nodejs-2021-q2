import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AppError } from "../../middleware/handleErrors";
import authService from './auth.service';
import { User } from "../../entitys/user.entity";

const authRouter = Router();

authRouter.route('/login').post(async (req: Request, res: Response) => {
    const { login, password } = req.body;
    const user = await authService.findUserLogin(login, password);
    if (!user) {
      throw new AppError(
        'Login failed. Check authentication.',
        StatusCodes.FORBIDDEN,
      );
    }
    const token = await user.generateUserToken();
    return res.status(StatusCodes.OK).json({ token, user: User.toResponse(user) });
}); 

export default authRouter;
