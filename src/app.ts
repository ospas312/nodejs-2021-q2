import express, { Application, NextFunction, Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express'
import { join } from 'path';
import YAML from 'yamljs';

import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import { mainLog, errorsLog } from './middleware/logger';
import { appHandleErr, handleErr } from './middleware/handleErrors';

const app: Application = express();
const swaggerDocument = YAML.load(join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }))
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req: Request, res:Response, next:NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(mainLog);

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);

app.use(errorsLog);
app.use(appHandleErr);
app.use(handleErr);

export default app;
