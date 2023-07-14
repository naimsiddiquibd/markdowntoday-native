import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';

const Banner = () => {
  const images = [
    require('../../assets/banner1.jpg'),
    require('../../assets/banner2.jpg'),
    require('../../assets/banner3.jpg'),
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {images.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={image} style={styles.image} resizeMode="cover" />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  imageContainer: {
    marginRight: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 300,
    height: 150,
  },
});

export default Banner;
