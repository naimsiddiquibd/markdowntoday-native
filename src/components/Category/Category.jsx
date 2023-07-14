import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { id: 1, name: 'Electronics', icon: 'ios-phone-portrait' },
  { id: 2, name: 'Clothing', icon: 'ios-shirt' },
  { id: 3, name: 'Home & Kitchen', icon: 'ios-home' },
  { id: 4, name: 'Beauty', icon: 'ios-color-palette' },
  { id: 5, name: 'Sports & Outdoors', icon: 'ios-basketball' },
  { id: 6, name: 'Books', icon: 'ios-book' },
  { id: 7, name: 'Toys & Games', icon: 'ios-game-controller' },
  { id: 8, name: 'Health & Wellness', icon: 'ios-heart' },
  { id: 9, name: 'Jewelry', icon: 'ios-bonfire' },
  { id: 10, name: 'Automotive', icon: 'ios-car' },
];

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Categories</Text> */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {categories.map((category) => (
          <View key={category.id} style={styles.categoryContainer}>
            <Ionicons name={category.icon} size={24} color="#888" style={styles.icon} />
            <Text style={styles.categoryName}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scrollContainer: {
    paddingBottom: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  icon: {
    marginRight: 12,
  },
  categoryName: {
    fontSize: 16,
  },
});

export default CategoryScreen;
