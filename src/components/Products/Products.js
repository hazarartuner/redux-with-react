import React from 'react';
import PropTypes from 'prop-types';

import './Products.css';

const Products = ({ children }) => {
  return <div className="Products">
    {children}
  </div>
};

Products.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Products;