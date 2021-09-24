import { useDispatch, useSelector } from 'react-redux';
import { RemoveTodo, ChangeCheck } from '../redux/action';

const useRemove = (item, index) => {
  const lista = useSelector((state) => state.list);
  const checks = useSelector((state) => state.check);
  const dispatch = useDispatch();

  const removeItem = () => {
    const rm = lista.filter((e, i) => index !== i);
    const rmCheck = checks.filter((e) => e !== item);
    dispatch(RemoveTodo(rm));
    dispatch(ChangeCheck(rmCheck));
  };

  return {
    removeItem,
  };
};

export default useRemove;
