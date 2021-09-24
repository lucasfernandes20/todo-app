import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  HeaderDiv, Div, H1, Img, TextField,
} from './styles';
import ChangeTodo from '../../redux/action';

const Header = () => {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    const { target: { value } } = event;
    setItem(value);

    if (event.charCode === 13) {
      dispatch(ChangeTodo(item));
      setItem('');
    }
  };

  return (
    <HeaderDiv>
      <Div>
        <H1>TODO</H1>
        <Img src="./todo-app-main/images/icon-moon.svg" alt="moon-icon" />
      </Div>
      <TextField
        onChange={(event) => handleKeyDown(event)}
        onKeyPress={(event) => handleKeyDown(event)}
        value={item}
        type="text"
        placeholder="Create a new Todo..."
      />
    </HeaderDiv>
  );
};

export default Header;
