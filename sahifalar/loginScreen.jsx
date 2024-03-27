import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";


export default function LoginScreen() {
    const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.textTop}>Tizimga kirish </Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Kirish</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonn} onPress={() => navigation.push('SignUp')} >
          <Text style={styles.buttonOutlineText}>Ro'yxatdan o'tish</Text>
        </TouchableOpacity>

        <Pressable style={styles.buttonn} onPress={() => navigation.push('Home')} >
          <Text style={styles.buttonOutlineText}>Home</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  textTop: {
    fontSize: 24,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    marginTop: 20,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
  },
  buttonn: {
    backgroundColor: "white",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    borderColor: "#0782F9",
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
  buttonOutlineText: {
    textAlign: "center",
    color: "#0782F9",
    fontSize: 17,
    fontWeight: "600",
  },
});
