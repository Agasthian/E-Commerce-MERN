import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import Button from '../../components/button/button';

const AddToCartBtn = ({ product, addItem }) => {
  return (
    <>
      <Button
        title='Add to cart'
        icon='shopping-cart'
        onClick={() => addItem(product)}
      />
    </>
  );
};
const mapDispatchToProps = dispatch => ({
  addItem: product => dispatch(addItem(product))
});

export default connect(null, mapDispatchToProps)(AddToCartBtn);
