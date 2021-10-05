import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FilterTodo } from '../redux/action';

const useFilter = () => {
  const dispatch = useDispatch();
  const allTask = useSelector((state) => state.list);
  const checkTask = useSelector((state) => state.check);
  const filtered = useSelector((state) => state.filter);

  const showTaskLeftQuantity = () => {
    const active = allTask.filter((e) => !checkTask.includes(e));
    return active.length;
  };

  const showAllTask = () => {
    dispatch(FilterTodo(allTask, 'all'));
  };

  const showActiveTask = () => {
    const active = allTask.filter((e) => !checkTask.includes(e));
    dispatch(FilterTodo(active, 'active'));
  };

  const ShowCompletedTask = () => {
    dispatch(FilterTodo(checkTask, 'completed'));
  };

  useEffect(() => {
    if (filtered === 'completed') {
      ShowCompletedTask();
    } else if (filtered === 'active') {
      showActiveTask();
    } else {
      showAllTask();
    }
  }, [checkTask, allTask]);

  return {
    filtered,
    showAllTask,
    showActiveTask,
    ShowCompletedTask,
    showTaskLeftQuantity,
  };
};

export default useFilter;
