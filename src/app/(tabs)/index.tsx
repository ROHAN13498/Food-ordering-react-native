import { StyleSheet, Image, ScrollView } from 'react-native';  

import { Text, View } from '@components/Themed';
import Colors from '@/constants/Colors';

import products from '@assets/data/products';

import { Product } from "@/types";

interface Props {
  product: Product;
}

const defaultImage="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png"
const ProductListItem = ({ product }: Props) => {
  return (
    <View style={styles.productContainer}>
      <Image source={{ uri: product.image || defaultImage }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </View>
  );
};

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.screenContainer}>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.light.background,
  },
  productContainer: {
    alignItems: 'center',  
    backgroundColor: 'white',  
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,  
    elevation: 3, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: 150, 
    height: 150,  
    borderRadius: 10,  
    marginBottom: 10,  
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: Colors.light.background,  
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,  
    color: Colors.light.text,  
  },
  price: {
    fontSize: 16,
    color: Colors.light.tint, 
    fontWeight: '600',
  },
});
