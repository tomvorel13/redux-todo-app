import { ADD_TODO, REMOVE_TODO, CLEAR_TODOS } from "../constants";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Shopping",
      text: "Gotta buy some veggies"
    },
    {
      id: 2,
      title: "Football",
      text: "Let Dan know I'll be coming late"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          {
            id: action.payload.id,
            title: action.payload.title,
            text: action.payload.text
          },
          ...state.todos
        ]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case CLEAR_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    default:
      return state;
  }
}
