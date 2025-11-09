import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";
import { enrollUser } from "../Enrollments/reducer";

const initialState = {
 courses: courses,
};
const coursesSlice = createSlice({
 name: "courses",
 initialState,
 reducers: {
   addNewCourse: (state, { payload: course }) => {
    //  const newCourse = { ...course, _id: uuidv4() };
    const newCourse = { ...course, _id: course._id || uuidv4() }; 
     state.courses = [...state.courses, newCourse] as any;
   },
   deleteCourse: (state, { payload: courseId }) => {
     state.courses = state.courses.filter(
       (course: any) => course._id !== courseId
     );
   },
   updateCourse: (state, { payload: course }) => {
     state.courses = state.courses.map((c: any) =>
       c._id === course._id ? course : c
     ) as any;
   },
 },
});
export const { addNewCourse, deleteCourse, updateCourse } =
 coursesSlice.actions;

 export const addCourseAndEnrollFaculty = (course: any) =>
  (dispatch: any, getState: any) => {
    const courseId = uuidv4();
    const newCourse = { ...course, _id: courseId };

    dispatch(addNewCourse(newCourse));

    const currentUser = getState().accountReducer.currentUser;
    dispatch(enrollUser({
      userId: currentUser._id,
      courseId: courseId,
    }));
  };


export default coursesSlice.reducer;