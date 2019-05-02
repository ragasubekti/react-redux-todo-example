const ADD_TODO = "@todo/ADD_TODO";
const TOGGLE_TODO_DONE = "@todo/TOGGLE_TODO_DONE";

const initialState = {
  todo: [{ content: "Tidur", done: false, id: 1 }]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const { content } = action.payload;
      const createId =
        state.todo.length > 0 ? state.todo[state.todo.length - 1].id + 1 : 1;
      return {
        ...state,
        todo: state.todo.concat({
          content,
          done: false,
          id: createId
        })
      };
    case TOGGLE_TODO_DONE:
      const todo = state.todo.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            done: !item.done
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        todo
      };
    default:
      return state;
  }
}

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: {
    content: todo
  }
});

export const toggleTodo = id => ({ type: TOGGLE_TODO_DONE, payload: id });
