import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { cartContext } from '@/providers/Cartproviders';
import CartListItems from '@components/CartListItems';

const CartScreen = () => {
    console.log("Entered");
  const { cartItems } = useContext(cartContext);
  console.log(cartItems)
  return (
    <View style={styles.container}>
      {cartItems.map((item,ind) => (
        <CartListItems key={ind} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
});

export default CartScreen;
