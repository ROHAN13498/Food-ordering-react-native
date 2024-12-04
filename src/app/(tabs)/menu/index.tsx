import { StyleSheet, Image, FlatList, Dimensions } from "react-native";
import { Text, View } from "@components/Themed";
import Colors from "@/constants/Colors";
import products from "@assets/data/products";
import { Product } from "@/types";
import { Link } from "expo-router";

// Get the screen width for dynamic calculations
const screenWidth = Dimensions.get("window").width;

interface Props {
  product: Product;
}

export const defaultImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

const ProductListItem = ({ product }: Props) => {
  return (
    <View style={styles.productContainer}>
    <Link
      href={{
        pathname: "/menu/[id]",
        params: { id: product.id.toString() },
      }}
    >
        <Image
          source={{ uri: product.image || defaultImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
    </Link>
      </View>
  );
};

export default function TabOneScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={{ padding: 10, gap: 10 }}
      columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: (screenWidth - 40) / 2, 
    marginBottom: 10, // Space between rows
  },
  image: {
    width: "100%", // Full width of the container
    height: 120, // Maintain aspect ratio
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: "center", 
    justifyContent: "center", 
    flexDirection: "column", 
    flex: 1,
    width: "100%", 
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.text,
    marginBottom: 5,
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    color: Colors.light.tint,
    fontWeight: "600",
    textAlign: "center", 
  },
});
