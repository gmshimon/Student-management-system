import { RequestHandler } from 'express';
import { createSemester } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sharedResponse';

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
