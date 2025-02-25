import express from 'express';

import Console from '../lib/Console';
import Response from '../lib/Response';
import CourseService from '../services/Course.service';

const router = express.Router();

const apiConsole = new Console('COURSE-CONTROLLER');
const response = new Response();

// get all courses
router.get('/', async (req, res) => {
  const courseService = await CourseService.getInstance();
  const courses = await courseService.getAll();
  apiConsole.success('Get all courses');
  response.success(res, courses);
});

// get course by id
router.get('/:slug', async (req, res) => {
  const { slug } = req.params;
  const courseService = await CourseService.getInstance();
  const course = await courseService.getOne(slug);
  if (!course) {
    apiConsole.error(`Course not found${slug}`);
    response.error(res, 'Course not found', 400);
    return;
  }
  apiConsole.success('Get all users');
  response.success(res, course);
});

// add new course
router.post('/', async (req, res) => {

});

// delete course
router.delete('/:slug', async (req, res) => {

});

// update course
router.put('/:slug', async (req, res) => {

});

// get all reservations
router.get('/:slug/reservations', async (req, res) => {

});

// create new reservation
// body: { uuid }
router.post('/:slug/reservate/', async () => {

});

export default router;
