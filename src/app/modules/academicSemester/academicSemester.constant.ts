import {
  IAcademicSemesterCode,
  IAcademicSemesterTitle,
  Month,
} from './academicSemeter.interface';

export const academicSemesterMonth: Month[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitle: IAcademicSemesterTitle[] = [
  'Autumn',
  'Fall',
  'Summer',
];

export const academicSemesterCode: IAcademicSemesterCode[] = ['01', '02', '03'];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Fall: '02',
  Summer: '03',
};
