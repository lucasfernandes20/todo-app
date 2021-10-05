import './App.css';
import React from 'react';
import Header from './components/Header';
import List from './components/List';
import Filter from './components/Filter';
import Main from './globalStyles';
import useDarkMode from './hook/useDarkMode';

function App() {
  const { theme } = useDarkMode();
  return (
    <Main themeSelect={theme}>
      <Header />
      <List />
      <Filter />
    </Main>
  );
}

export default App;
