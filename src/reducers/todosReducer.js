import { ADD_TODO } from "../constants";

const initialState = {
  todos: [
    {
      title: "Shopping",
      text: "Gotta buy some veggies"
    },
    {
      title: "Football",
      text: "Let Dan know I'll be coming late"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state.todos,
        {
          title: action.title,
          text: action.text
        }
      ];
    default:
      return state;
  }
}
