import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export function HomeScreen ({route, navigation}){

function handleSettingsPress(){

    navigation.navigate("Settings")
}


    return(

        <View style={styles.container}>
       <Text>HomeScreen</Text> 
       <Button title="Go to the setting screen"
onPress={handleSettingsPress}
/>

</View>
    )
}


const styles = StyleSheet.create({
    container: {
flex: 1,
alignItems: "center",
justifyContent: "center"

    }
    })
