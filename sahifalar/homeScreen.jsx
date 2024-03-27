import React from "react";
import { Pressable, StyleSheet, View,Text } from "react-native";
import MapView from "react-native-maps";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
// This import is removed as useState is not used in this file.
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Location from 'expo-location';
const myLocation = { latitude: 39.93088, longitude: 64.377800 };
const tariffs = [
    {
        id:1,
        Name:'start',
        price: '4.000'
    },
    {
        id:2,
        Name:'Comfort',
        price: '6.000'
    },
    {
        id:3,
        Name:'Bussines',
        price: '10.000',
       
    }
]
export function HomeScreen() {

    const [currentLocation, setCurrentLocation] = React.useState(null);
    const [location, setLocation] = React.useState(null);
    const mapRef = React.useRef(null);

    const getCurrentLocation = async() =>{
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        mapRef.current.animateToRegion({
            ...location.coords,
            latitudeDelta:0.0022,
            longitudeDelta:0.0021,
        })
        setLocation(location);
    }
  return (
    <View style={styles.container}>
           <MapView ref={mapRef}
        style={styles.map}
        initialRegion={{
          ...myLocation,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0021,
        }}
        zoomEnabled={true}
        onRegionChange={(region) => {
          console.log(region);
          setCurrentLocation(region);
        }}
      />
      <View style={styles.point}>
      <MaterialCommunityIcons name="google-maps" size={44} color="#0782F9" />
      </View>
      <Pressable onPress={() => {
        getCurrentLocation();
      }} style={{
        position:"absolute",
        width:50,
        height:50,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        right:10,
        bottom:'43%',
      }}>
      <FontAwesome5 name="location-arrow" size={30} color="black" />
      </Pressable>
      <View style={styles.buttonBottom}>
            <Pressable style={styles.startPoint}>
            <Entypo name="circle" size={16} color="#0782F9" />
                <Text style={{
                    fontSize:16,
                    fontWeight:'600',
                    marginLeft:5,
                }}>Start Point :</Text>
            </Pressable>
            <Pressable style={styles.destinationPoint}>
            <Entypo name="circle" size={16} color="#0782F9" />
                <Text style={{
                     fontSize:16,
                     fontWeight:'600',
                     marginLeft:5,
                }}>Destination :</Text>
            </Pressable>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={
                {   
                    marginTop:15,
                    maxHeight:100,
                }
            }>
                    {tariffs.map(tariffs =>(
                         <Pressable style={{
                            padding:12,
                            borderWidth:1,
                            borderColor:'#ccc',
                            borderRadius:10,
                            marginLeft:10,
                            alignItems:'center',
                            justifyContent:'center',
                            flexDirection:'row',
                        }}>
                       
                       <Ionicons name="car-sport-outline" size={35} color="black" />
                    
                        <View>
                            
                        <Text style={{
                            fontWeight:'900',
                            marginLeft:10,
                            fontSize:19,
                        
                        }}>{tariffs.Name}</Text>
                        <Text style={{
                            fontWeight:'600',
                            marginLeft:10,
                            fontSize:18,
                            
        
                        }}>{tariffs.price}<Text style={{
                            fontSize:12,
                        }}>sum</Text></Text>
                        </View>
                        </Pressable>
                    ))}
               
            </ScrollView>

            <Pressable style={{
                padding:20,
                borderRadius:5,
                backgroundColor:'#0782F9',
                margin:20,
            }}>
                <Text style={{
                    textAlign:'center',
                    fontSize:18,
                    fontWeight:'600',
                    color:'white',
                }}>Request</Text>
            </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
    },
    map:{
            width:'100%',
            height:'60%',
    },
    point:{
        position:'absolute',
        top:210,
    },
    buttonBottom:{
        width:'100%',
        height:'40%',
        backgroundColor:'#fff',

    },
    startPoint:{
        padding:15,
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#ccc',
        
    },
    destinationPoint:{
        padding:15,
        flexDirection:'row',
        alignItems:'center',
    }

})