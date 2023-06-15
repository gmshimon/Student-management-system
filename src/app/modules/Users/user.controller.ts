import { RequestHandler } from 'express';
import userService from './user.service';
const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;
    const result = await userService.createUser(user);

    res.status(200).json({
      status: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    /* res.status(400).json({
      status: false,
      message: 'Failed to create user',
    }) */
    next(error);
  }
};

export default {
  createUser,
};
