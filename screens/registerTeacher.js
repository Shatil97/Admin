import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

import Ionicons from '@expo/vector-icons/Ionicons'
import { BACKGROUND, PRIMARY_COLOR } from '../color/colors';
const RegisterTeacherScreen = ({navigation}) => {

    useEffect(() => {
        navigation.setOptions({
         
            headerTintColor: PRIMARY_COLOR, 
            headerTitleAlign:'center',
            headerTitleStyle:{
              fontWeight: 'bold',
              fontSize:26
            },
        });
      }, [navigation]);


  return (
    <View>
      <Text>registerTeacher</Text>
    </View>
  )
}

export default RegisterTeacherScreen

const styles = StyleSheet.create({})