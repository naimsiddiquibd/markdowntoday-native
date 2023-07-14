import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';

const Carousel = () => {
  const data = [
    { id: 1, title: 'Travel', image: require('../../assets/travel.jpg') },
    { id: 2, title: 'Sports', image: require('../../assets/sports.jpg') },
    { id: 3, title: 'Shoes', image: require('../../assets/shoes.jpg') },
    { id: 4, title: 'Luxury', image: require('../../assets/luxury.jpg') },
    { id: 5, title: 'Garden', image: require('../../assets/garden.jpg') },
    { id: 6, title: 'Electronics', image: require('../../assets/electronics.jpg') },
    { id: 7, title: 'Computers', image: require('../../assets/computers.jpg') },
    { id: 8, title: 'Beauty', image: require('../../assets/beauty.jpg') },
    { id: 9, title: 'Baby', image: require('../../assets/baby.jpg') },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {data.map(item => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      backgroundColor: '#fff',
      height: 120,
      width: '100%',
    },
    scrollViewContent: {
      alignItems: 'flex-start',
      paddingHorizontal: 20,
    },
    card: {
      marginRight: 15,
      alignItems: 'center',
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    title: {
      marginTop: 5,
    },
  });
  

export default Carousel;
