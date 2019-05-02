import update from "immutability-helper";

const ADD_TODO = "@todo/ADD_TODO";
const TOGGLE_TODO_DONE = "@todo/TOGGLE_TODO_DONE";

const initialState = {
  todo: [{ content: "Tidur", done: false }]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: state.todo.concat(action.payload)
      };
    case TOGGLE_TODO_DONE:
      return update(state, {
        todo: {
          [action.payload]: {
            $set: {
              ...state.todo[action.payload],
              done: !state.todo[action.payload].done
            }
          }
        }
      });
    default:
      return state;
  }
}

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: {
    content: todo,
    done: false
  }
});

export const toggleTodo = id => ({ type: TOGGLE_TODO_DONE, payload: id });
