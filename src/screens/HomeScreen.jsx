import { Text } from 'react-native'
import React from 'react'
import { View, StyleSheet } from 'react-native';
import TopCircularCarousel from '../components/TopCircularCarousel';
import Banner from '../components/Banner';
import DealsOfTheDay from '../components/DealsOfTheDay';

export default function Home() {
  return (
    <View style={styles.container}>
      <TopCircularCarousel />
      <Banner />
      <DealsOfTheDay />
    </View>
  )
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});