import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

app.use(cors());

//parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import ApiError from './errors/ApiError';
import globalErrorHandler from './app/middlewares/globalError';
import routes from './app/Routes';
import status from 'http-status';

app.use('/api/v1', routes);
app.get('/api/v1', async (req: Request, res: Response, next: NextFunction) => {
  res.send('hello world');
  throw new ApiError(400, 'Internal Server Error');
  // next("Ore baba")
  Promise.reject(new Error('Unhandled Promise error'));
});
app.use(globalErrorHandler);

//route not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: 'NOT FOUND',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
