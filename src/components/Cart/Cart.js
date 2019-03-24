import React from "react";
import PropTypes from "prop-types";

import "./Cart.css";

const Cart = ({ children, cartItems }) => {
  return (
    <div className="Cart">
      <h3>SEPETİM</h3>

      {children.length <= 0 && <p>Sepetiniz boş</p>}

      {children.length > 0 && (
        <React.Fragment>
          {children}
          <div className="cart-footer">
            <p className="total-price">
              <strong>Toplam: </strong>
              {cartItems &&
                cartItems.reduce((acc, curr) => {
                  return acc + curr.product.price * curr.count;
                }, 0)}{" "}
              TL
            </p>
            <button>Siparişi Tamamla</button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

Cart.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        price: PropTypes.number.isRequired
      }),
      count: PropTypes.number.isRequired
    })
  )
};

export default Cart;
