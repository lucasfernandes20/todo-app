import React from 'react';
import {
  HeaderDiv, Div, H1, Img, TextField,
} from './styles';
import useAddItem from '../../hook/useAddItem';

const Header = () => {
  const { item, handleKeyDown } = useAddItem();

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
