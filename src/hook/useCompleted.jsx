import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { CheckTodo, ChangeCheck } from '../redux/action';

const useCompleted = (item) => {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();
  const store = useSelector((state) => state.check);

  useEffect(() => {
    const validate = store.some((e) => e === item);
    if (validate) {
      setChecked(true);
    }
  }, []);

  const setCheckedDispatch = () => {
    setChecked(!checked);
    const validate = store.some((e) => e === item);
    if (validate) {
      const rm = store.filter((e) => e !== item);
      dispatch(ChangeCheck(rm));
    } else {
      dispatch(CheckTodo(item));
    }
  };

  return {
    setCheckedDispatch,
    checked,
  };
};

export default useCompleted;
