import { Text } from 'react-native'
import React from 'react'
import { View, StyleSheet } from 'react-native';
import TopCircularCarousel from '../components/TopCircularCarousel';
import Banner from '../components/Banner';
import DealsOfTheDay from '../components/DealsOfTheDay';
import UserProfile from '../components/UserProfile/UserProfile';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <UserProfile />
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