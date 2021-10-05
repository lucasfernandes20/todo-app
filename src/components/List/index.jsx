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
  const desktop = window.innerWidth >= 824;

  useEffect(() => {
    setTodos(list);
  }, [list]);

  return (
    <>
      <Section themeSelect={theme}>
        <Ul>
          {todos && todos.map((e, i) => <Item key={e} index={i} item={e} />)}
          <li style={desktop ? { height: '10vh' } : { height: '50px' }} />
        </Ul>
      </Section>
      <Div themeSelect={theme}>
        <P>{`${showTaskLeftQuantity()} items left`}</P>
        {desktop
        && (
          <Filter themeSelect={theme}>
            <P point select={filtered === 'all'} onClick={() => showAllTask()}>All</P>
            <P point select={filtered === 'active'} onClick={() => showActiveTask()}>Active</P>
            <P point select={filtered === 'completed'} onClick={() => ShowCompletedTask()}>Completed</P>
          </Filter>
        )}
        <P point onClick={() => clearCompleted()}>Clear Completed</P>
      </Div>
    </>
  );
};

export default List;
