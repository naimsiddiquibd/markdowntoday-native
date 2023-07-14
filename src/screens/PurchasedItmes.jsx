import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PurchasedItmes = ({ navigation }) => {
  const purchasedItems = [
    {
      id: 1,
      name: 'Product 1',
      price: '$10',
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$15',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$20',
      quantity: 3,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Purchased Items</Text>
      {purchasedItems.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserProfile')}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 8,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#888888',
  },
  button: {
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default PurchasedItmes;
