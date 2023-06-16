import { Response } from 'express';
type IApiResponse<T> = {
  status: number;
  success: boolean;
  message?: string | null;
  data: T;
};

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  res.status(data.status).json({
    status: data.status,
    success: data.success,
    message: data.message || null,
    data: data.data || null,
  });
};

export default sendResponse;
