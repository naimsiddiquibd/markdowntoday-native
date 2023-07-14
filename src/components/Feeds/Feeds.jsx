import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const feeds = [
  {
    id: 1,
    title: 'New Arrival',
    image: require('../../../assets/product1.jpg'),
    description: 'Check out our latest arrivals. Get them before they sell out!',
  },
  {
    id: 2,
    title: 'Summer Sale',
    image: require('../../../assets/product1.jpg'),
    description: 'Huge discounts on summer collection. Limited time offer!',
  },
  {
    id: 3,
    title: 'Flash Sale',
    image: require('../../../assets/product1.jpg'),
    description: 'Don\'t miss out on our flash sale. Grab the best deals!',
  },
  {
    id: 4,
    title: 'Flash Sale',
    image: require('../../../assets/product1.jpg'),
    description: 'Don\'t miss out on our flash sale. Grab the best deals!',
  },
  {
    id: 5,
    title: 'Flash Sale',
    image: require('../../../assets/product1.jpg'),
    description: 'Don\'t miss out on our flash sale. Grab the best deals!',
  },
  {
    id: 6,
    title: 'Flash Sale',
    image: require('../../../assets/product1.jpg'),
    description: 'Don\'t miss out on our flash sale. Grab the best deals!',
  },
  {
    id: 7,
    title: 'Flash Sale',
    image: require('../../../assets/product1.jpg'),
    description: 'Don\'t miss out on our flash sale. Grab the best deals!',
  },
];

const Feeds = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {feeds.map((feed) => (
        <View key={feed.id} style={styles.feedContainer}>
          <Image source={feed.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{feed.title}</Text>
            <Text style={styles.description}>{feed.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    width: '100%',
  },
  feedContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#888888',
  },
});

export default Feeds;
