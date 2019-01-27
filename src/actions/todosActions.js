import { ADD_TODO, REMOVE_TODO, CLEAR_TODOS } from "../constants";

export const addTodo = todo => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: todo
  });
};

export const removeTodo = newTodos => dispatch => {
  dispatch({
    type: REMOVE_TODO,
    payload: newTodos
  });
};

export const clearTodos = () => dispatch => {
  dispatch({
    type: CLEAR_TODOS,
    payload: []
  });
};
