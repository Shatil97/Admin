import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { PRIMARY_COLOR, WHITE } from '../color/colors';

import Ionicons from '@expo/vector-icons/Ionicons'





const TeacherlistScreen = ({navigation}) => {


  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={()=>navigation.navigate('RegisterTeacher')}>
          <Ionicons name='add-circle' size={36}  color={WHITE} /> 
        </TouchableOpacity>
      ),
      headerleft:()=>{
        <TouchableOpacity onPress={()=>navigation.navigate('RegisterTeacher')}>
        <Ionicons name='add-circle' size={36}  color={WHITE} /> 
        </TouchableOpacity>

      }
    });
  }, [navigation]);




  return (
    <View style={styles.screen}>
    <StatusBar backgroundColor={PRIMARY_COLOR} style={"light"}/>
    
    
    


    </View>
  )
}

export default TeacherlistScreen

const styles = StyleSheet.create({
  screen:{
    padding:10,
  }
})