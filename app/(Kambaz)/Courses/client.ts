import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const axiosWithCredentials = axios.create({ withCredentials: true });
const USERS_API = `${HTTP_SERVER}/api/users`;
const COURSES_API = `${HTTP_SERVER}/api/courses`;


export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return data;
};

export const deleteCourse = async (id: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${id}`);
  return data;
};

export const updateCourse = async (course: any) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

export const findUsersForCourse = async (courseId: string) => {
 const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
 return response.data;
};


//modules
const MODULES_API = `${HTTP_SERVER}/api/modules`;


export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const deleteModule = async (courseId:string, moduleId: string) => {
 const response = await axios.delete(`${COURSES_API}/${courseId}/modules/${moduleId}`);
 return response.data;
};

export const updateModule = async (courseId:string, module: any) => {
  const { data } = await axios.put(`${COURSES_API}/${courseId}/modules/${module._id}`, module);
  return data;
};


//lesson
export const createLessonForModule = async (courseId: string, moduleId: string, lesson: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules/${moduleId}/lessons`,
    lesson
  );
  return response.data;
};

export const deleteLesson = async (courseId: string, moduleId: string, lessonId: string) => {
  const response = await axios.delete(
    `${COURSES_API}/${courseId}/modules/${moduleId}/lessons/${lessonId}`
  );
  return response.data;
};

export const updateLesson = async (courseId: string, moduleId: string, lesson: any) => {
  const response = await axios.put(
    `${COURSES_API}/${courseId}/modules/${moduleId}/lessons/${lesson._id}`,
    lesson
  );
  return response.data;
};

export const findLessonById = async (courseId: string, moduleId: string, lessonId: string) => {
  const response = await axios.get(
    `${COURSES_API}/${courseId}/modules/${moduleId}/lessons/${lessonId}`
  );
  return response.data;
};

// Assignments
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const findAssignmentById = async (assignmentId: string) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

export const createAssignmentsForCourse = async (
  courseId: string,
  assignment: any
) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const deleteAssignments = async (assignmentId: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

export const updateAssignments = async (assignment: any) => {
  const { data } = await axios.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment
  );
  return data;
};

// Enrollments
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;

export const enrollIntoCourse = async (userId: string, courseId: string) => {
 const response = await axiosWithCredentials.post(`${USERS_API}/${userId}/courses/${courseId}`);
 return response.data;
};
export const unenrollFromCourse = async (userId: string, courseId: string) => {
 const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}/courses/${courseId}`);
 return response.data;
};

export const getMyEnrollments = async () => {
  const { data } = await axiosWithCredentials.get(ENROLLMENTS_API);
  return data;
};