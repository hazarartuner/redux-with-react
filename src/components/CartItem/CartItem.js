import React from 'react';
import PropTypes from "prop-types";

import './CartItem.css';

const CartItem = props => {
  const { product: { id, name, image, price }, count, onRemoveFromCart } = props;

  function handleOnRemoveButtonClick() {
    onRemoveFromCart && onRemoveFromCart(id);
  }

  return <div className="CartItem">
    <img src={image} alt={name}/>
    <p className={'name'}>{name}</p>
    <span className={'price'}>{price} TL</span>
    <span className={'count'}>{count} Adet</span>
    <button onClick={handleOnRemoveButtonClick}>Sil</button>
  </div>
};

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  count: PropTypes.number,
  onRemoveFromCart: PropTypes.func,
};

CartItem.defaultProps = {
  count: 1,
};


export default CartItem;