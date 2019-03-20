import React from 'react';
import PropTypes from 'prop-types';

import './Categories.css';

const Categories = ({ categories }) => {
  return <div className={'Categories'}>
    <strong>KATEGORİLER:</strong>
    <span>Tümü</span>
    {categories.map(category => <span key={category}>{category}</span>) }
  </div>
};

Categories.propTypes = {
  categories: PropTypes.array,
};

Categories.defaultProps = {
  categories: [],
};

export default Categories;