import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';

const DealsOfTheDay = () => {
  const products = [
    {
      id: 1,
      image: require('../../assets/product1.jpg'),
      title: 'Product 1',
      subtitle: 'Product 1 description',
      oldPrice: 19.99,
      discountedPrice: 14.99,
    },
    {
      id: 2,
      image: require('../../assets/product1.jpg'),
      title: 'Product 2',
      subtitle: 'Product 2 description',
      oldPrice: 29.99,
      discountedPrice: 24.99,
    },
    {
      id: 3,
      image: require('../../assets/product1.jpg'),
      title: 'Product 2',
      subtitle: 'Product 2 description',
      oldPrice: 29.99,
      discountedPrice: 24.99,
    },
    {
      id: 4,
      image: require('../../assets/product1.jpg'),
      title: 'Product 2',
      subtitle: 'Product 2 description',
      oldPrice: 29.99,
      discountedPrice: 24.99,
    },
    {
      id: 5,
      image: require('../../assets/product1.jpg'),
      title: 'Product 2',
      subtitle: 'Product 2 description',
      oldPrice: 29.99,
      discountedPrice: 24.99,
    },
    // Add more product objects as needed
  ];

  return (
    <View style={styles.dealsContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {products.map((product) => (
          <View key={product.id} style={styles.card}>
            <Image source={product.image} style={styles.image} />
            <View style={{ flex: 1, marginLeft: 8 }}>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.subtitle}>{product.subtitle}</Text>
              <Text style={styles.oldPrice}>Old Price: ${product.oldPrice}</Text>
              <Text style={styles.discountedPrice}>Discounted Price: ${product.discountedPrice}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  dealsContainer: {
    height: 330,
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  scrollContainer: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 2,
    padding: 8,
    marginBottom: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 2,
    marginRight: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 4,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  discountedPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
});

export default DealsOfTheDay;
