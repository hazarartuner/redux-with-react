import { Component } from "react";
import PropTypes from "prop-types";

import { products, categories } from "helpers/fakeData";

class ProductsContainer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  state = {
    products,
    categories,
    selectedCategory: null
  };

  handleOnAddToCart = id => {
    alert(`ID numarası "${id}" olan ürünü sepete ekle`);
  };

  handleOnCategoryChange = category => {
    alert(`Seçilen kategori: ${category}`);
  };

  render() {
    const { children } = this.props;
    const { products, categories, selectedCategory } = this.state;

    return (
      children &&
      children({
        products,
        categories,
        selectedCategory,
        onAddToCart: this.handleOnAddToCart,
        onCategoryChange: this.handleOnCategoryChange
      })
    );
  }
}

export default ProductsContainer;
