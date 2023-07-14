import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';

const DealsOfTheDay = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://ap.markdowntoday.com/api/top-deal');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <View style={styles.dealsContainer}>
      <Text style={styles.headline}>Top Deals</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {products.map((product) => (
          <View key={product.id} style={styles.card}>
            <Image source={{ uri: `https://ap.markdowntoday.com/assets/images/products/${product.photo}` }} style={styles.image} />
            <View style={{ flex: 1, marginLeft: 8 }}>
              <Text style={styles.title}>{product.name.length > 20
                  ? `${product.name.substring(0, 20)}...`
                  : product.name}</Text>
              <Text style={styles.subtitle}>${product.price}</Text>
              {/* <Text style={styles.oldPrice}>Old Price: ${product.oldPrice}</Text> */}
              <Text style={styles.discountedPrice}>{product.amount}% Cashback</Text>
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
    marginBottom: 16,
  },
  scrollContainer: {
    paddingBottom: 16,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
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
    color: '#E94036',
  },
});

export default DealsOfTheDay;
