const INITIAL_STATE = {
  list: [],
  check: [],
};

const TodoList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, list: [...state.list, action.list] };
    case 'REMOVE':
      return { ...state, list: [...action.list] };
    case 'CHECKED':
      return { ...state, check: [...state.check, action.list] };
    case 'REMOVE-CHECK':
      return { ...state, check: [...action.list] };
    default:
      return state;
  }
};

export default TodoList;
