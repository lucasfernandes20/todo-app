export const ChangeTodo = (list) => ({
  type: 'CHANGE', list,
});

export const ChangeCheck = (list) => ({
  type: 'REMOVE-CHECK', list,
});

export const RemoveTodo = (list) => ({
  type: 'REMOVE', list,
});

export const CheckTodo = (list) => ({
  type: 'CHECKED', list,
});
