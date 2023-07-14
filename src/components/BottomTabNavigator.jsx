import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons"; // Assuming you're using expo

// Import your screens for each tab
import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import FeedsScreen from "../screens/FeedsScreen";
import CouponsScreen from "../screens/CouponsScreen";
import AccountScreen from "../screens/AccountScreen";
import Logo from "./Shared/Logo/Logo";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Category":
              iconName = "category";
              break;
            case "Feeds":
              iconName = "rss-feed";
              break;
            case "Coupons":
              iconName = "local-offer";
              break;
            case "Account":
              iconName = "person";
              break;
            default:
              iconName = "help";
              break;
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.placeholder,
        showLabel: false,
        style: {
          backgroundColor: theme.colors.surface,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: true,
          headerTitle: () => <Logo />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Feeds" component={FeedsScreen} />
      <Tab.Screen name="Coupons" component={CouponsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
