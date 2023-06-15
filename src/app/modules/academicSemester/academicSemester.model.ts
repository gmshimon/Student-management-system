import { model, Schema } from 'mongoose';
import {
  IAcademicSemester,
  AcademicSemesterModel,
} from './academicSemeter.interface';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemester.constant';
import ApiError from '../../../errors/ApiError';
import status from 'http-status';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitle,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
  },
  {
    timestamps: true,
  }
);

academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(status.CONFLICT, 'Academic Semester is already exist');
  } else {
    next();
  }
});

const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'academicSemester',
  academicSemesterSchema
);

export default AcademicSemester;
