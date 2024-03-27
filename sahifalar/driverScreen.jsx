import React from "react";
import { View,Text,Pressable,StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';






export function DriverScreen() {

  return (
    <View  style={styles.box}>
           <Text style={{
               textAlign:'center',
               margin:10,
               fontSize:25,
               fontWeight:'600',
           }} >
                  <FontAwesome name="user-o" size={24} color="black" />  Jon Dou
                                 </Text>
                                 <Text style={{
               textAlign:'center',
               margin:10,
               fontSize:24,
               fontWeight:'600',
               color:'#0782F9',
               marginLeft:-0,
           }} >
                <Ionicons name="car-sport" size={24} color="black" />   Malibu
           </Text>
           <Text style={{
               textAlign:'center',
               margin:10,
               fontSize:24,
               fontWeight:'600',
               color:'#0782F9'
           }} >
                   80|E124FF|UZB
           </Text>
           <Text style={{
               textAlign:'center',
               margin:10,
               fontSize:25,
               fontWeight:'600',
           }} >
                   9min
           </Text >
           <Pressable style={{
               padding:5,
               backgroundColor:'#0782F9',
               borderRadius:10,
           }}>
               <Text style={{
                   textAlign:'center',
                   color:'white',
                   fontSize:25,
                   fontWeight:'600',
               }}>Ok</Text>
           </Pressable>
   </View>
  );
}

const styles = StyleSheet.create({
    box:{
        position:"absolute",
        width:300,
        height:200,
        backgroundColor:'#fff',
        borderRadius:10,
        bottom:'58%',
        
        display:'none',
    }
})