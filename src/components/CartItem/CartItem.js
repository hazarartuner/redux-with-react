import React from 'react';
import PropTypes from "prop-types";

import './CartItem.css';

const CartItem = props => {
  const { item: { id, name, image, price }, onRemoveFromCart } = props;

  function handleOnRemoveButtonClick() {
    onRemoveFromCart(id);
  }

  return <div className="CartItem">
    <img src={image} alt={name}/>
    <p>{name}</p>
    <span>{price} TL</span>
    <button onClick={handleOnRemoveButtonClick}>Sil</button>
  </div>
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onRemoveFromCart: PropTypes.func,
};


export default CartItem;