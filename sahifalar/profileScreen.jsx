import React from "react";
import { View ,Text,StyleSheet, Pressable} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
export function ProfileScreen() {
    const navigation = useNavigation();

  return (<View style={styles.container}>
            <View style={styles.box}>
        <Pressable onPress={()=>navigation.push('Home')} style={{
            width:70,
            height:40,
            borderWidth:1,
            borderColor:'white',
            borderRadius:10,
            marginTop:40,
            marginLeft:10,
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Text style={{
                fontSize:17,
                color:'white'
            }}>Back</Text>
        </Pressable>
    
             <View style={styles.userPoint}>
             <SimpleLineIcons name="camera" size={57} color="black" />
             </View>
                <Pressable style={{
                    width:140,
                    height:40,
                    backgroundColor:'#0782F9',
                    borderRadius:10,
                    marginLeft:112,
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:10,
                    borderWidth:1,
                    borderColor:'#ccc',
                }}>
                    <Text style={{
                            fontSize:20,
                            fontWeight:'600',
                            color:'white',
                    }}>Edit picture</Text>
                </Pressable>
            </View>
  </View>);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    box:{
        width:'100%',
        height:'55%',
        backgroundColor:'#0782F9',
        borderRadius:30,
       

    },
    userPoint:{
        marginLeft:134,
        marginTop:90,
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    }
})