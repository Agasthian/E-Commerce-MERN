export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem._id === cartItemToAdd._id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem._id === cartItemToAdd._id
        ? { ...cartItem, purchaseQuantity: cartItem.purchaseQuantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, purchaseQuantity: 1 }];
};
