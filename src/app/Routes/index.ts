import express from 'express';
import userRouter from '../modules/Users/user.route';
import { semesterRouter } from '../modules/academicSemester/academicSemester.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/semesters',
    route: semesterRouter,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
