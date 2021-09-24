import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Section, Ul,
} from './styles';
import Item from '../Item';

const List = () => {
  const [todos, setTodos] = useState([]);
  const list = useSelector((state) => state.list);

  useEffect(() => {
    setTodos(list);
  }, [list]);

  return (
    <Section>
      <Ul>
        {todos && todos.map((e) => <Item key={e} item={e} />)}
      </Ul>
    </Section>
  );
};

export default List;
