import config from '../../../config/index';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import User from './user.model';
import { generateUserId } from './user.utilis';

export const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated incremental ID
  const id = await generateUserId();

  // default password
  user.id = id;

  if (!user.password) {
    user.password = config.default_student_pass as string;
  }

  const createdUser = await User.create(user);

  if (!createUser) {
    throw new ApiError(400, 'Failed to create user');
  }

  return createdUser;
};

export default {
  createUser,
};
