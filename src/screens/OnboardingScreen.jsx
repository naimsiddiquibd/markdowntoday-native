import React, { useState, useRef } from 'react';
import { StyleSheet, View, Image, Text, Dimensions, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Signin from './signin';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const flatListRef = useRef(null);

  const slides = [
    {
      image: require('../../assets/onboardingscreen1.png'),
      title: 'Welcome to MyApp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: require('../../assets/onboardingscreen1.png'),
      title: 'Explore',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: require('../../assets/onboardingscreen1.png'),
      title: 'Get Started',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const renderSlide = ({ item }) => (
    <View style={[styles.slideContainer, { backgroundColor: item.backgroundColor }]}>
      <Image source={item.image} style={styles.slideImage} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  const handleSlideChange = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveSlideIndex(slideIndex);
  };

  const goToPreviousSlide = () => {
    if (activeSlideIndex > 0) {
      flatListRef.current.scrollToIndex({ index: activeSlideIndex - 1 });
    }
  };

  const handleSkip = () => {
    // Navigate to the Home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftButton} onPress={goToPreviousSlide}>
        <Text style={styles.buttonText}>{'<'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightButton} onPress={handleSkip}>
        
        <Pressable onPress={()=>{navigation.navigate(Signin)}}>
            <Text style={styles.buttonText}>Skip</Text>
          </Pressable>
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleSlideChange}
        keyExtractor={(_, index) => index.toString()}
      />
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dots, index === activeSlideIndex && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideContainer: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '70%',
    height: '70%',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 50,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#c4c4c4',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#F5487F',
  },
  leftButton: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  rightButton: {
    position: 'absolute',
    top: 40,
    right: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F5487F',
  },
});

export default OnboardingScreen;
