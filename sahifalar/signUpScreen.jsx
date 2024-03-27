import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";


export default function SignUp() {
  const navigation = useNavigation();

  const [email , setEmail] = React.useState();
return (
  <KeyboardAvoidingView style={styles.container} behavior="padding">
    <Text style={styles.textTop}>Ro'yxatdan o'tish </Text>
    <View style={styles.inputContainer}>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Call"
        onChangeText={email}
        style={styles.input}
      />
    </View>
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.buttonn} >
        <Text style={styles.buttonOutlineText}>register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.push('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      
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
  marginTop:7,
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
