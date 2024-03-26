import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const myLocation = {latitude:39.930882,longtitude:64.377800}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={{
        ...myLocation,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421
      }}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
