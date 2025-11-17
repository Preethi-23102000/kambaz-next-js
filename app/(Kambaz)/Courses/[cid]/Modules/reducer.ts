import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  modules: [] as any[],
};
const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, { payload: module }) => {
      const newModule: any = {
        _id: uuidv4(),
        lessons: [],
        name: module.name,
        course: module.course,
      };
      state.modules = [...state.modules, newModule] as any;
    },
    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter(
        (m: any) => m._id !== moduleId);
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as any;
    },

     setModules: (state, action) => {
      state.modules = action.payload;
    },

// --- NEW: lesson-level reducers ---
    addLesson: (state, { payload }: { payload: { moduleId: string; name: string } }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === payload.moduleId
          ? {
              ...m,
              lessons: [
                ...m.lessons,
                { _id: uuidv4(), name: payload.name } as any,
              ],
            }
          : m
      ) as any;
    },

    deleteLesson: (
      state,
      { payload }: { payload: { moduleId: string; lessonId: string } }
    ) => {
      state.modules = state.modules.map((m: any) =>
        m._id === payload.moduleId
          ? {
              ...m,
              lessons: m.lessons.filter((l: any) => l._id !== payload.lessonId),
            }
          : m
      ) as any;
    },

    editLesson: (
      state,
      { payload }: { payload: { moduleId: string; lessonId: string } }
    ) => {
      state.modules = state.modules.map((m: any) =>
        m._id === payload.moduleId
          ? {
              ...m,
              lessons: m.lessons.map((l: any) =>
                l._id === payload.lessonId ? { ...l, editing: true } : l
              ),
            }
          : m
      ) as any;
    },

    updateLesson: (
      state,
      { payload }: { payload: { moduleId: string; lesson: any } }
    ) => {
      state.modules = state.modules.map((m: any) =>
        m._id === payload.moduleId
          ? {
              ...m,
              lessons: m.lessons.map((l: any) =>
                l._id === payload.lesson._id ? payload.lesson : l
              ),
            }
          : m
      ) as any;
    },
  },
});

export const { addModule, deleteModule, updateModule, setModules, editModule,addLesson,
  deleteLesson,
  editLesson,
  updateLesson, } =
  modulesSlice.actions;
export default modulesSlice.reducer;