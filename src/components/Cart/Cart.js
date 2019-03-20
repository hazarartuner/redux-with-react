import React from 'react';
import PropTypes from 'prop-types';

import './Cart.css';

const Cart = ({ children }) => {
  return <div className="Cart">
    <h3>SEPETİM</h3>
    {children.length <= 0 && (
      <p>Sepetiniz boş</p>
    )}

    {children.length > 0 && (
      <React.Fragment>
        {children}
        <div className="cart-footer">
          <button>Siparişi Tamamla</button>
        </div>
      </React.Fragment>
    )}
  </div>
};


Cart.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Cart;