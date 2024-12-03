import { StyleSheet, Image } from 'react-native';  // Import Image component

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';

const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />  {/* Add style for Image */}
      <Text style={styles.title}>{product.name}</Text> 
      <Text style={styles.price}>${product.price}</Text>  {/* Apply price style */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    borderRadius:10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  price: {
    color: Colors.light.tint, 
  },
  image: {
    width: "100%",  
    aspectRatio: 1, 
  },
});
