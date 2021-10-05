import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Section, Ul, Div, P,
} from './styles';
import Item from '../Item';
import useDarkMode from '../../hook/useDarkMode';
import useFilter from '../../hook/useFilter';
import useRemove from '../../hook/useRemove';

const List = () => {
  const [todos, setTodos] = useState([]);
  const list = useSelector((state) => state.filtered);
  const { theme } = useDarkMode();
  const { showTaskLeftQuantity } = useFilter();
  const { clearCompleted } = useRemove();

  useEffect(() => {
    setTodos(list);
  }, [list]);

  return (
    <>
      <Section themeSelect={theme}>
        <Ul>
          {todos && todos.map((e, i) => <Item key={e} index={i} item={e} />)}
          <li style={{ height: '50px' }} />
        </Ul>
      </Section>
      <Div themeSelect={theme}>
        <P>{`${showTaskLeftQuantity()} items left`}</P>
        <P onClick={() => clearCompleted()}>Clear Completed</P>
      </Div>
    </>
  );
};

export default List;
