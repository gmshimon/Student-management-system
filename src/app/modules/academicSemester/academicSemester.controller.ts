import { RequestHandler } from 'express';
import { createSemester } from './academicSemester.service';

export const createSemesterController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await createSemester(academicSemesterData);
    res.status(200).json({
      success: true,
      message: 'Academic Semester created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
