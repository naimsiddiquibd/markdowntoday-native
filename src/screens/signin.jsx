import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Signup from "./signup";

export default function Signin({navigation}) {
  return (
    <SafeAreaView style={{ paddingHorizontal: 16 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require("../../assets/authpic.png")}
          style={{ alignSelf: "center" }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 15,
          }}
        >
          Welcome to Markdowntoday
        </Text>
        <View>
          <TextInput placeholder="Email address" style={styles.input} />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            title={"Login"}
            customStyles={{ alignSelf: "center", marginBottom: 60 }}
          ></Button>
          <Pressable onPress={()=>{navigation.navigate(Signup)}}>
            <Text>Don't have an account? <Text style={{color: "green", fontWeight: "bold"}}>Signup</Text></Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
