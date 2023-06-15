import ApiError from '../../../errors/ApiError';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import AcademicSemester from './academicSemester.model';
import { IAcademicSemester } from './academicSemeter.interface';
import status from 'http-status';

export const createSemester = async (
  playLoad: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[playLoad.title] !== playLoad.code) {
    throw new ApiError(status.BAD_REQUEST, 'Invalid Semester Code');
  }

  const result = await AcademicSemester.create(playLoad);
  return result;
};
