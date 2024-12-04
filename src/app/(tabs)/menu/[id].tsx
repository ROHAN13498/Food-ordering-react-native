import { View, Text, Image, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import products from "@assets/data/products";
import { defaultImage } from "@/app/(tabs)/menu/index";
import { PizzaSize, Product, CartItem } from "@/types";
import Button from "@components/Button";
import { cartContext } from "@/providers/Cartproviders";

const ProductScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [userSize, setUserSize] = useState<PizzaSize>("S");
  const productIndex = id ? parseInt(id) - 1 : 0;
  const product = products[productIndex] || products[0]; // Fallback product if index is invalid

  const { cartItems, SetCartItems } = useContext(cartContext);

  const addToCart = () => {
    // Create the CartItem object
    const newCartItem: CartItem = {
      id: `${product.id}-${userSize}`, // Combining product id and size to create a unique id
      product: product,
      product_id: product.id,
      size: userSize,
      quantity: 1, // Initial quantity is 1
    };

    // Add the new CartItem to the cart, maintaining existing items
    SetCartItems([...cartItems, newCartItem]);
    console.log("Item added to cart:", newCartItem);
  };

  const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

  console.log(cartItems);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image || defaultImage }}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {product.name}
      </Text>
      <View style={styles.sizesContainer}>
        {sizes.map((size, index) => (
          <Text
            key={index}
            style={[
              styles.sizetext,
              userSize === size ? styles.selected : null,
            ]}
            onPress={() => setUserSize(size)}
          >
            {size}
          </Text>
        ))}
      </View>
      <Text style={styles.price}>Price: ${product.price}</Text>
      <Button text="Add to Cart" onPress={addToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold", // Corrected from "heavy"
    marginVertical: 10,
  },
  sizesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  selected: {
    backgroundColor: "gray",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  sizetext: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    lineHeight: 50,
  },
  price: {
    fontSize: 18,
    color: "gray",
    fontWeight: "bold",
  },
});

export default ProductScreen;
