import React from 'react';
import PropTypes from 'prop-types';
import {
  Li, Ball, Div, Img,
} from './styles';
import useRemove from '../../hook/useRemove';
import useCompleted from '../../hook/useCompleted';

const Item = ({ item, index }) => {
  const { checked, setCheckedDispatch } = useCompleted(item);
  const { removeItem } = useRemove(item, index);

  return (
    <Div>
      <Ball onClick={() => setCheckedDispatch()} check={checked} src="./todo-app-main/images/icon-check.svg" alt="checkBall" />
      <Li check={checked}>{item}</Li>
      <Img onClick={() => removeItem()} src="./todo-app-main/images/icon-cross.svg" alt="close icon" />
    </Div>
  );
};

Item.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Item;
