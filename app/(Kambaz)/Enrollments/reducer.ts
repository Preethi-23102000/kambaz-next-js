import { createSlice } from "@reduxjs/toolkit";
import * as db from "../Database";

const initialState = {
  enrollments: db.enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollUser: (state, action) => {
      const { userId, courseId } = action.payload;
      // Check if already enrolled
      const existsEnrollment = state.enrollments.find(
        (e: any) => e.user === userId && e.course === courseId
      );
      if (!existsEnrollment) {
        state.enrollments.push({
          _id: Date.now().toString(),
          user: userId,
          course: courseId,
        });
      }
    },
    unenrollUser: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (e: any) => !(e.user === userId && e.course === courseId)
      );
    },
  },
});

export const { enrollUser, unenrollUser } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;