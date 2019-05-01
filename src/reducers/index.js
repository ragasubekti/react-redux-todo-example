const ADD_TODO = "@todo/ADD_TODO";

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
