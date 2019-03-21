import { Component } from 'react';
import PropTypes from 'prop-types';

import { cartItems } from 'helpers/fakeData';

class CartContainer extends Component
{
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  state = {
    cartItems: cartItems,
  };

  handleOnRemoveFromCart = id => {
    alert(`ID numarası "${id}" olan ürünü sepetten kaldır`);
  };

  render() {
    const { children } = this.props;
    const { cartItems } = this.state;

    return children && children({ cartItems, onRemoveFromCart: this.handleOnRemoveFromCart });
  }
}

export default CartContainer;