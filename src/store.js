// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/taskReducer';

// configureStore est la façon moderne de créer le store.
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;