import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { removeFromCart } from "redux/actions";

import { cartSelector } from "redux/selectors";

class CartContainer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  handleOnRemoveFromCart = id => {
    const { removeFromCart } = this.props;

    removeFromCart && removeFromCart(id);
  };

  render() {
    const { children, cartItems } = this.props;

    return (
      children &&
      children({ cartItems, onRemoveFromCart: this.handleOnRemoveFromCart })
    );
  }
}

const mapStateToProps = state => ({
  cartItems: cartSelector(state)
});

const mapDispatchToProps = {
  removeFromCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
