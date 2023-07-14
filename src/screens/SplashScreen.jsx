import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/splashbg.jpg')}
        style={styles.backgroundImage}
      />
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const imageWidth = width * 0.8; // Adjust the width of the image as needed
const imageHeight = imageWidth; // Assuming the image has a square aspect ratio

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
