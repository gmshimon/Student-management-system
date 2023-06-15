import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

app.use(cors());

//parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import userRouter from './app/modules/Users/user.route';
import { semesterRouter } from './app/modules/academicSemester/academicSemester.route';
import ApiError from './errors/ApiError';
import globalErrorHandler from './app/middlewares/globalError';

app.use('/api/v1/users', userRouter);
app.use('/api/v1/semesters', semesterRouter);

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.send('hello world');
  throw new ApiError(400, 'Internal Server Error');
  // next("Ore baba")
  Promise.reject(new Error('Unhandled Promise error'));
});
app.use(globalErrorHandler);

export default app;
