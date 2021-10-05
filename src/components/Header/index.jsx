import React from 'react';
import {
  HeaderDiv, Div, H1, Img, TextField,
} from './styles';
import useAddItem from '../../hook/useAddItem';
import useDarkMode from '../../hook/useDarkMode';

const Header = () => {
  const { item, handleKeyDown } = useAddItem();
  const { changeAppTheme, theme } = useDarkMode();

  return (
    <HeaderDiv themeSelect={theme}>
      <Div>
        <H1>TODO</H1>
        <Img onClick={() => changeAppTheme(!theme)} src={theme ? './todo-app-main/images/icon-moon.svg' : './todo-app-main/images/icon-sun.svg'} alt="moon-icon" />
      </Div>
      <TextField
        onChange={(event) => handleKeyDown(event)}
        onKeyPress={(event) => handleKeyDown(event)}
        value={item}
        type="text"
        placeholder="Create a new Todo..."
        themeSelect={theme}
      />
    </HeaderDiv>
  );
};

export default Header;
