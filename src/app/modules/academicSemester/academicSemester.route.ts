import express from 'express';
import { academicSemesterValidation } from './academicSemester.validation';
import validateRequest from '../../middlewares/validateRequest';
import { createSemesterController } from './academicSemester.controller';
const router = express.Router();

router.post(
  '/create-academicSemester',
  validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  createSemesterController
);

export const semesterRouter = router;
