import Mock from 'mockjs'
import CourseInfoById from './data/CourseInfoById'
import CourseMenu from './data/CourseMenu'
import Courses from './data/Courses'

// 本应当传入参数course_id
Mock.mock('/getCourseById', 'get', CourseInfoById.getCourse)
Mock.mock('/getCourseMenu', 'get', CourseMenu.getCourseMenu)
Mock.mock('/getCourses', 'get', Courses.getCourses)
