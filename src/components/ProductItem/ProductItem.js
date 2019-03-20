import React from 'react';
import PropTypes from 'prop-types';

import './ProductItem.css';

const ProductItem = props => {
  const { product: { id, name, image, description, price }, onAddToCart } = props;

  function handleOnAddToCartClick() {
    onAddToCart(id);
  }

  return <div className="ProductItem">
    <img src={image} alt={name} />
    <h2 className={'name'}>{name}</h2>
    <span className={'price'}>{price} TL</span>
    <p className={'description'}>{description}</p>
    <button onClick={handleOnAddToCartClick}>Sepete Ekle</button>
  </div>
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func,
};

export default ProductItem;