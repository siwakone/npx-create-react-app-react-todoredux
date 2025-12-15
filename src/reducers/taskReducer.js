// src/reducers/taskReducer.js
import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, SET_FILTER } from '../constants/actionTypes';

const initialState = {
  todos: [
    { id: 1, description: 'Créer le composant Addtask', isDone: true },
    { id: 2, description: 'Définir les actions Redux', isDone: false },
    { id: 3, description: 'Implémenter la logique de filtre', isDone: false },
  ],
  filter: 'ALL', // 'ALL', 'DONE', 'UNDONE'
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        todos: state.todos.map(task =>
          task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map(task =>
          task.id === action.payload.id ? { ...task, description: action.payload.newDescription } : task
        ),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;