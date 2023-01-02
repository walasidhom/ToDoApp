import {
  ADD_TODO,
  FINISH_TODO,
  UPDATE_TODO,
} from "../actionTypes/toDoActionTypes";

export const addToDo = (newTask) => {
  return {
    type: ADD_TODO,
    payload: newTask,
  };
};

export const finishToDo = (id) => {
  return {
    type: FINISH_TODO,
    payload: id,
  };
};

export const updateToDo = (id, updatedDescription) => {
  return {
    type: UPDATE_TODO,
    payload: { id, updatedDescription },
  };
};
