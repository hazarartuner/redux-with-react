import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  loadAllProducts,
  loadAllCategories,
  setActiveCategory,
  addToCart
} from "redux/actions";

class ProductsContainer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { loadAllCategories, loadAllProducts } = this.props;

    loadAllCategories && loadAllCategories();
    loadAllProducts && loadAllProducts();
  }

  handleOnAddToCart = id => {
    const { addToCart } = this.props;

    addToCart && addToCart(id);
  };

  handleOnCategoryChange = category => {
    const { setActiveCategory } = this.props;

    setActiveCategory && setActiveCategory(category);
  };

  render() {
    const { children, categories, selectedCategory, products } = this.props;

    return (
      children &&
      children({
        categories,
        selectedCategory,
        products,
        onAddToCart: this.handleOnAddToCart,
        onCategoryChange: this.handleOnCategoryChange
      })
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  selectedCategory: state.selectedCategory,
  products: Object.values(state.products).filter(
    product =>
      !state.selectedCategory || product.category === state.selectedCategory
  )
});

const mapDispatchToProps = {
  loadAllCategories,
  loadAllProducts,
  setActiveCategory,
  addToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
