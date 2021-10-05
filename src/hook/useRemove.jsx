import { useDispatch, useSelector } from 'react-redux';
import { RemoveTodo, ChangeCheck, FilterTodo } from '../redux/action';

const useRemove = (item, index) => {
  const allTask = useSelector((state) => state.list);
  const checkTask = useSelector((state) => state.check);
  const filtered = useSelector((state) => state.filtered);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const clearCompleted = () => {
    const completed = allTask.filter((e) => !checkTask.includes(e));
    const rmFiltered = filtered.filter((e) => !checkTask.includes(e));
    dispatch(RemoveTodo(completed));
    dispatch(FilterTodo(rmFiltered, filter));
    dispatch(ChangeCheck([]));
  };

  const removeItem = () => {
    const rm = allTask.filter((e, i) => index !== i);
    const rmCheck = checkTask.filter((e) => e !== item);
    const rmFiltered = filtered.filter((e) => e !== item);
    dispatch(RemoveTodo(rm));
    dispatch(ChangeCheck(rmCheck));
    dispatch(FilterTodo(rmFiltered, filter));
  };

  return {
    removeItem,
    clearCompleted,
  };
};

export default useRemove;
