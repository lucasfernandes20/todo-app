import React from 'react';
import { Section, P } from './styles';
import useFilter from '../../hook/useFilter';
import useDarkMode from '../../hook/useDarkMode';

function Filter() {
  const {
    filtered,
    showAllTask,
    showActiveTask,
    ShowCompletedTask,
  } = useFilter();
  const { theme } = useDarkMode();

  return (
    <Section themeSelect={theme}>
      <P select={filtered === 'all'} onClick={() => showAllTask()}>All</P>
      <P select={filtered === 'active'} onClick={() => showActiveTask()}>Active</P>
      <P select={filtered === 'completed'} onClick={() => ShowCompletedTask()}>Completed</P>
    </Section>
  );
}

export default Filter;
