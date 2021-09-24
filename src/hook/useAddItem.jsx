import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ChangeTodo } from '../redux/action';

const useAddItem = () => {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();
  const store = useSelector((state) => state.list);

  const handleKeyDown = (event) => {
    const { target: { value } } = event;
    setItem(value);

    if (event.charCode === 13) {
      const validate = store.some((e) => e === value);
      if (!validate) {
        if (value.length < 3) {
          global.alert('Not Enough letters');
        } else {
          dispatch(ChangeTodo(item));
          setItem('');
        }
      } else {
        global.alert('The same task is not avalible!');
      }
    }
  };

  return {
    item,
    handleKeyDown,
  };
};

export default useAddItem;
