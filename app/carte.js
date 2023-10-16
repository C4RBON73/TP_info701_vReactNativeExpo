import { Text,View,StatusBar,StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import MapView from 'react-native-maps';


export default function Page() {
  return (
   <View>
        <Text style ={{color : 'rgb(0,0,0)'}}>Bienvenue sur le campus du Bourget du Lac !</Text>
        <StatusBar style="auto" />

                <Text>Je suis la carte </Text>
                <MapView style={styles.map} />

      </View>
 );
}
const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  }
});

