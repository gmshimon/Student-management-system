import { RequestHandler } from 'express';
import userService from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sharedResponse';
const createUser: RequestHandler = catchAsync(async (req, res, next) => {
  const { user } = req.body;
  const result = await userService.createUser(user);

  sendResponse(res, {
    status: 200,
    success: true,
    message: 'User created successfully',
    data: result,
  });
  next();
});

export default {
  createUser,
};
