import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { PRIMARY_COLOR,SECONDARY_COLOR,WHITE,BACKGROUND  } from '../color/colors'
import * as Font from 'expo-font';

const HomeScreen = ({navigation}) => {

  
  useEffect(() => {
    // Load Quicksand font
    Font.loadAsync({
      Quicksand: require('../assets/fonts/Quicksand-VariableFont_wght.ttf'),
      'Quicksand-Bold': require('../assets/fonts/static/Quicksand-Bold.ttf'),
     //'Quicksand-Medium': require('../assets/fonts/static/Quicksand-Medium.ttf'),
     //'Quicksand-Regular': require('../assets/fonts/static/Quicksand-Regular.ttf'),
      'Quicksand-Light': require('../assets/fonts/static/Quicksand-Light.ttf'),
      // Add more font styles if needed
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={PRIMARY_COLOR} style={"light"}/> 
    
        <TouchableOpacity style={{width:"94%"}}
      onPress={()=>navigation.navigate('Teachers')} >
      <View style={[styles.box,{backgroundColor:PRIMARY_COLOR}]}>
        <Image 
          source={require('../assets/teachersImg.png')}
          style={{width:'50%',height:'100%',borderBottomLeftRadius:8,borderTopLeftRadius:8}}/>

         <View style={styles.textContainer}>
           <Text style={styles.primaryText}>DRMC</Text>
           <Text style={styles.primaryText}>Teachers</Text>
           <Text style={styles.secondaryText}>356</Text>
           <Text style={styles.varientText}>Total Teachers</Text> 
         </View>
      </View>

      </TouchableOpacity>



      <TouchableOpacity style={{width:"94%"}}
      onPress={()=>navigation.navigate('Classes')} >
      <View style={[styles.box,{backgroundColor:SECONDARY_COLOR}]}>
        <Image 
          source={require('../assets/studentsImg.png')}
          style={{width:'50%',height:'100%',borderBottomLeftRadius:8,borderTopLeftRadius:8}}/>

         <View style={styles.textContainer}>
           <Text style={styles.primaryText}>DRMC</Text>
           <Text style={styles.primaryText}>Students</Text>
           <Text style={styles.secondaryText}>5343</Text>
           <Text style={styles.varientText}>Total Students</Text> 
         </View>
      </View>

      </TouchableOpacity>
      
    

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:BACKGROUND,
    flex:1,
    alignItems: 'center',
    
  },

  box:{
    borderRadius:8,
    width:'100%',
    height:200,
    flexDirection:'row',
    marginTop:20,    
  },

  textContainer:{
    padding:10,
    justifyContent:'center'
  },

  primaryText:{
    color:'white',
    fontSize:26,
    fontFamily:'Quicksand-Light'
  },

  varientText:{
    color:'white',
    fontSize:20,
    fontFamily:'Quicksand-Light',
  },

  secondaryText:{
    color:'white',
    fontSize:46,
    fontFamily:'Quicksand-Bold'
  }

  
})