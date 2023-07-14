import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Signin from "./signin";
import Home from "./HomeScreen";
import Signup from "./signup";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const flatListRef = useRef(null);

  const slides = [
    {
      image: require("../../assets/onboardingscreen1.png"),
      title: "Welcome to MyApp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      showSkipButton: true,
    },
    {
      image: require("../../assets/onboardingscreen2.png"),
      title: "Explore",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      showSkipButton: true,
    },
    {
      image: require("../../assets/onboardingscreen3.png"),
      title: "Get Started",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      showSignupButton: true,
      showSkipButton: true,
    },
  ];

  const renderSlide = ({ item }) => (
    <View
      style={[styles.slideContainer, { backgroundColor: item.backgroundColor }]}
    >
      <Image
        source={item.image}
        style={styles.slideImage}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        {item.showSkipButton && (
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
        )}
        {item.showSignupButton && (
          <TouchableOpacity onPress={handleSignup} style={styles.signupButton}>
            <Text style={styles.signupButtonText}>Signup</Text>
          </TouchableOpacity>
        )}
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
    navigation.navigate("Home");
  };

  const handleSignup = () => {
    // Navigate to the Signup screen
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
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
            style={[
              styles.dots,
              index === activeSlideIndex && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slideContainer: {
    flex: 1,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  slideImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 50,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#c4c4c4",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#F5487F",
  },
  skipButton: {
    marginTop: 20,
  },
  signupButton: {
    marginTop: 20,
    backgroundColor: "#F5487F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 50,
  },
  signupButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F5487F",
  },
});

export default OnboardingScreen;
