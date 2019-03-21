import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { generatePath } from 'helpers/route';

import './ProductItem.css';

const ProductItem = props => {
  const { product: { id, name, image, description, price }, onAddToCart } = props;

  function handleOnAddToCartClick() {
    onAddToCart && onAddToCart(id);
  }

  const path = generatePath('productPage', { id });

  return <div className="ProductItem">
    <Link className={'image-link'} to={path}>
      <img src={image} alt={name} />
    </Link>
    <h2 className={'name'}>
      <Link to={path}>{name}</Link>
    </h2>
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