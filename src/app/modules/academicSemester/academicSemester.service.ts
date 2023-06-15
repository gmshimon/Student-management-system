import AcademicSemester from './academicSemester.model';
import { IAcademicSemester } from './academicSemeter.interface';

export const createSemester = async (
  playLoad: IAcademicSemester
): Promise<IAcademicSemester> => {
  const result = await AcademicSemester.create(playLoad);
  return result;
};
