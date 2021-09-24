import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Li, Ball, Div } from './styles';

const Item = ({ item }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Div onClick={() => setChecked(!checked)}>
      <Ball check={checked} />
      <Li check={checked}>{item}</Li>
    </Div>
  );
};

Item.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Item;
