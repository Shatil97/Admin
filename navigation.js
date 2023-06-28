import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/home'
import ClassesListScreen from './screens/classes'
import TeacherlistScreen from './screens/teachers'
import { PRIMARY_COLOR, WHITE } from './color/colors';
import RegisterTeacherScreen from './screens/registerTeacher';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterTeacher">

        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            title: 'Admin Panel',
            headerTintColor: '#fff', 
            headerTitleAlign:'center',
            headerTitleStyle:{
              fontWeight: 'bold',
              fontSize:26
            },
            headerStyle:{
              backgroundColor: PRIMARY_COLOR,
            }
          }}/>

        <Stack.Screen name="Classes" component={ClassesListScreen}/>
          
        <Stack.Screen name="Teachers" component={TeacherlistScreen}
        options={{   
          title: 'Teachers',
          headerTintColor:WHITE, 
          headerTitleAlign:'center',
          headerTitleStyle:{
            fontWeight: 'bold',
            fontSize:26
          },
          headerStyle:{
            backgroundColor: PRIMARY_COLOR,
          }
          }}/>

          <Stack.Screen name='RegisterTeacher' component={RegisterTeacherScreen}/>

        </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation

