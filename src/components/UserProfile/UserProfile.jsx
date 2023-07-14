import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const UserProfile = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/product1.jpg")}
          style={styles.profilePicture}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate("PurchasedItems")}
        >
          <Ionicons name="md-cart" size={24} color="#888" style={styles.icon} />
          <Text style={styles.label}>Purchased Items</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Ionicons
            name="md-people"
            size={24}
            color="#888"
            style={styles.icon}
          />
          <Text style={styles.label}>Affiliation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Ionicons
            name="md-wallet"
            size={24}
            color="#888"
            style={styles.icon}
          />
          <Text style={styles.label}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Ionicons
            name="md-megaphone"
            size={24}
            color="#888"
            style={styles.icon}
          />
          <Text style={styles.label}>Tickets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Ionicons
            name="md-alert"
            size={24}
            color="#888"
            style={styles.icon}
          />
          <Text style={styles.label}>Disputes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Ionicons
            name="md-person"
            size={24}
            color="#888"
            style={styles.icon}
          />
          <Text style={styles.label}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Ionicons
            name="md-lock-closed"
            size={24}
            color="#888"
            style={styles.icon}
          />
          <Text style={styles.label}>Reset Password</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingTop: 8,
    width: "100%",
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: "#888",
  },
  section: {
    marginBottom: 32,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  icon: {
    marginRight: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#888",
  },
  logoutButton: {
    backgroundColor: "#FF0000",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  logoutButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default UserProfile;
