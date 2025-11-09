import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../../Database";
import type { Assignment } from "../../../Database/userDefinedTypes";

const initialState = {
  assignments: db.assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [...state.assignments, action.payload];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (a: Assignment) => a._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      const index = state.assignments.findIndex(
        (a: Assignment) => a._id === action.payload._id
      );
      if (index !== -1) state.assignments[index] = action.payload;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
