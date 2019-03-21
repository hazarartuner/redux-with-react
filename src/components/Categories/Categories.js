import React from 'react';
import PropTypes from 'prop-types';

import './Categories.css';

const Categories = ({ children }) => {
  return <div className={'Categories'}>
    <strong>KATEGORİLER:</strong>
    {children}
  </div>
};

Categories.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Categories;