const INITIAL_STATE = {
  list: [],
  check: [],
  filtered: [],
  filter: 'all',
  darkMode: false,
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
    case 'SET-FILTERED':
      return { ...state, filtered: [...action.list], filter: action.filter };
    case 'SET-THEME':
      return { ...state, darkMode: action.theme };
    default:
      return state;
  }
};

export default TodoList;
