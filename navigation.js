import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './screens/home'

const Navigation = () => {
  return (
    <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
         
        </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})