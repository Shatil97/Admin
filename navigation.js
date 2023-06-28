import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './screens/home'
import ClassesListScreen from './screens/classes'
import TeacherlistScreen from './screens/teachers'

const Navigation = () => {
  return (
    <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Classes" component={ClassesListScreen}/>
            <Stack.Screen name="Teachers" component={TeacherlistScreen}/>
        </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})