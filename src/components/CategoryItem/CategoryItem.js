import React from 'react';
import PropTypes from 'prop-types';

import './CategoryItem.css';

const CategoryItem = props => {
  const { id, children, onClick } = props;

  function handleOnClick() {
    onClick && onClick(id);
  }

  return <span className="CategoryItem" onClick={handleOnClick}>
    {children}
  </span>
};

CategoryItem.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CategoryItem;