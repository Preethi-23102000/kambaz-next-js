import { createSlice } from "@reduxjs/toolkit";
import type { Assignment } from "../../../Database/userDefinedTypes";

const initialState = {
  assignments:  [] as any[],
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

     setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

  },
});

export const { addAssignment, deleteAssignment, updateAssignment , setAssignments} =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
