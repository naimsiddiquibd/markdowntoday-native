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
import Input from "../components/input";
import Signin from "./signin";

export default function Signup({navigation}) {
  return (
    <SafeAreaView style={{ paddingHorizontal: 16 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Input placeholder="Name" />
          <Input placeholder="Phone number" />
          <Input placeholder="Email" />
          <Input placeholder="Password" secureTextEntry />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            title={"Signup"}
            customStyles={{ alignSelf: "center", marginBottom: 60 }}
          ></Button>
          <Pressable onPress={()=>{navigation.navigate(Signin)}}>
            <Text>Already have an account? <Text style={{color: "green", fontWeight: "bold"}}>Signin</Text></Text>
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
    borderBottomColor: "#ccc",
    marginBottom: 25,
  },
});
