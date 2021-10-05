import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Section, Ul, Div, P, Filter,
} from './styles';
import Item from '../Item';
import useDarkMode from '../../hook/useDarkMode';
import useFilter from '../../hook/useFilter';
import useRemove from '../../hook/useRemove';

const List = () => {
  const [todos, setTodos] = useState([]);
  const list = useSelector((state) => state.filtered);
  const {
    filtered,
    showAllTask,
    showActiveTask,
    ShowCompletedTask,
  } = useFilter();
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
          <ol />
        </Ul>
      </Section>
      <Div themeSelect={theme}>
        <P>{`${showTaskLeftQuantity()} items left`}</P>
        <Filter themeSelect={theme}>
          <P point select={filtered === 'all'} onClick={() => showAllTask()}>All</P>
          <P point select={filtered === 'active'} onClick={() => showActiveTask()}>Active</P>
          <P point select={filtered === 'completed'} onClick={() => ShowCompletedTask()}>Completed</P>
        </Filter>
        <P point onClick={() => clearCompleted()}>Clear Completed</P>
      </Div>
    </>
  );
};

export default List;
