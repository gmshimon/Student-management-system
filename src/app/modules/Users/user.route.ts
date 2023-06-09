import express from 'express';
import userController from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from './users.validate';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(userValidation.createUserZodSchema),
  userController.createUser
);

export default router;
