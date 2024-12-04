import React, { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CartItem } from "@/types";
import { defaultImage } from "@/app/(tabs)/menu";
import Button from "./Button"; // Assuming Button is a component that takes a `text` prop and an `onPress` prop
import { cartContext } from "@/providers/Cartproviders"; // Assuming cartContext is properly set up

interface CartListItemProps {
  item: CartItem;
}

const CartListItem = ({ item }: CartListItemProps) => {
  const { cartItems, SetCartItems } = useContext(cartContext);

  // Function to update quantity for the specific cart item
  const updateQuantity = (id: string, newQuantity: number) => {
    const updatedCart = cartItems.map(cartItem =>
      cartItem.id === id
        ? { ...cartItem, quantity: newQuantity } // Update only the item that matches the id
        : cartItem
    );
    SetCartItems(updatedCart); // Set the updated cart
  };

  const incrementQuantity = () => {
    updateQuantity(item.id, item.quantity + 1); // Increment quantity
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1); // Decrement quantity, but not below 1
    }
  };

  return (
    <View style={styles.cartItemContainer}>
      <Image
        source={{ uri: item.product.image || defaultImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.product.name}</Text>
        <Text style={styles.price}>Price: ${item.product.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Button text="+" onPress={incrementQuantity} style={styles.button} />
        <Text style={styles.quantity}>{item.quantity}</Text>
        <Button text="-" onPress={decrementQuantity} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 8,
  },
  textContainer: {
    justifyContent: "center",
    flex: 2,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    fontSize: 14,
    color: "gray",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  button: {
    width: 40, // Square button size
    height: 40,
    backgroundColor: "#FF6347", // Tomato color for the button
    borderRadius: 8, // Slightly rounded corners
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    fontSize: 24,
    color: "white",
  },
});

export default CartListItem;
