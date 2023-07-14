import React from "react";
import { View, Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";


export default function Button({
  title,
  onPress,
  customStyles,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        customStyles
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        width: "100%",
        height: 45,
        backgroundColor: '#ED6B58',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        color: "#fff"
    }
})
