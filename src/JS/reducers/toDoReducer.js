import {
  ADD_TODO,
  FINISH_TODO,
  UPDATE_TODO,
} from "../actionTypes/toDoActionTypes";

const initialState = {
  Tasks: [
    { id: 1, description: "task 1", isDone: false },
    { id: 2, description: "task 2", isDone: false },
  ],
};
console.log(initialState);

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(state);
      return {
        ...state,
        Tasks: [...state.Tasks, action.payload],
      };
    case FINISH_TODO:
      return {
        ...state,
        Tasks: state.Tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };

    case UPDATE_TODO:
      return {
        ...state,
        Tasks: state.Tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.updatedDescription }
            : task
        ),
      };

    default:
      return state;
  }
};
export default toDoReducer;
