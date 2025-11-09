import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import coursesReducer from "./Courses/reducer";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";
import enrollmentsReducer from "./Enrollments/reducer";

// Combine all reducers
const rootReducer = combineReducers({
  coursesReducer,
  modulesReducer,
  accountReducer,
  assignmentsReducer,
  enrollmentsReducer,
});

// Persist config
const persistConfig = {
  key: 'kambaz-app',
  storage,
  whitelist: ['accountReducer', 'assignmentsReducer', 'coursesReducer', 'modulesReducer','enrollmentsReducer'], // What to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;