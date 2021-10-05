import React from 'react';
import PropTypes from 'prop-types';
import {
  Li, Ball, Div, Img,
} from './styles';
import useRemove from '../../hook/useRemove';
import useCompleted from '../../hook/useCompleted';
import useDarkMode from '../../hook/useDarkMode';

const Item = ({ item, index }) => {
  const { checked, setCheckedDispatch } = useCompleted(item);
  const { removeItem } = useRemove(item, index);
  const { theme } = useDarkMode();

  return (
    <Div themeSelect={theme}>
      <Ball onClick={() => setCheckedDispatch()} check={checked} themeSelect={theme}>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke={theme ? 'white' : 'hsl(235, 24%, 19%)'} strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
      </Ball>
      <Li themeSelect={theme} check={checked}>{item}</Li>
      <Img onClick={() => removeItem()} src="./todo-app-main/images/icon-cross.svg" alt="close icon" />
    </Div>
  );
};

Item.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Item;
