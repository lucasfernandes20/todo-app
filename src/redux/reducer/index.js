const INITIAL_STATE = {
  list: [],
};

const TodoList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, list: [...state.list, action.list] };
    default:
      return state;
  }
};

export default TodoList;
