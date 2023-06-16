import { RequestHandler } from 'express';
import { createSemester, getAllSemester } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sharedResponse';
import { IPaginationOptions } from '../../../interface/pagination';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/paginationFields';

export const createSemesterController: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { ...academicSemesterData } = req.body;
    const result = await createSemester(academicSemesterData);
    sendResponse(res, {
      status: 200,
      success: true,
      message: 'Academic Semester created successfully',
      data: result,
    });
    next();
  }
);

export const getAllAcademicSemesters: RequestHandler = catchAsync(
  async (req, res, next) => {
    const paginationOptions = pick(req.query, paginationFields);

    console.log(paginationOptions);
    const result = await getAllSemester(paginationOptions);
    sendResponse(res, {
      status: 200,
      success: true,
      message: 'Data Fetched successfully',
      data: result,
    });
    next();
  }
);
