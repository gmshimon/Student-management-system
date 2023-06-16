import ApiError from '../../../errors/ApiError';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import AcademicSemester from './academicSemester.model';
import { IAcademicSemester } from './academicSemeter.interface';
import status from 'http-status';
import { getAllAcademicSemesters } from './academicSemester.controller';
import { IPaginationOptions } from '../../../interface/pagination';
import Request from 'express';
import { IGenericResponse } from '../../../interface/common';
import { paginationHelper } from '../../../helpers/paginationHelper';
import { SortOrder } from 'mongoose';

export const createSemester = async (
  playLoad: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[playLoad.title] !== playLoad.code) {
    throw new ApiError(status.BAD_REQUEST, 'Invalid Semester Code');
  }

  const result = await AcademicSemester.create(playLoad);
  return result;
};

export const getAllSemester = async (
  playLoad: IPaginationOptions
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { skip, page, limit, sortBy, sortOrder } =
    paginationHelper.calculatePagination(playLoad);

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const result = await AcademicSemester.find()
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await AcademicSemester.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
