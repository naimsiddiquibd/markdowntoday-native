import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const itemWidth = width / 2;

const products = [
  {
    id: 1,
    image: require('../../../assets/product1.jpg'),
    price: '$19.99',
    cashback: 'Earn $2.00 cash back',
  },
  {
    id: 2,
    image: require('../../../assets/product1.jpg'),
    price: '$29.99',
    cashback: 'Earn $3.50 cash back',
  },
  {
    id: 3,
    image: require('../../../assets/product1.jpg'),
    price: '$14.99',
    cashback: 'Earn $1.50 cash back',
  },
  {
    id: 4,
    image: require('../../../assets/product1.jpg'),
    price: '$9.99',
    cashback: 'Earn $1.00 cash back',
  },
];

const ProductComponent = () => {
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.headline}>Recent Products</Text>
    <View style={styles.container}>
      {products.map((product) => (
        <View key={product.id} style={styles.itemContainer}>
          <Image source={product.image} style={styles.image} />
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.cashback}>{product.cashback}</Text>
        </View>
      ))}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 10,
  },
  itemContainer: {
    width: itemWidth,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10, // Adjust the border radius value as desired
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  cashback: {
    fontSize: 14,
    marginTop: 2,
    color: 'green',
  },
});

export default ProductComponent;
