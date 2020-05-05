/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Fontsize from './component/fontssize';

const App= () => {
  return (
  <View style={styles.ketengah}>
    <StatusBar backgroundColor={'#ce66fa'}/>
    <View
     style={{
       flex:1,
       paddingHorizontal:25,
     }}
    >
      <View 
        style={{
          height:250,
          backgroundColor:'white',
          position:'relative',
          top:50,
          shadowColor:'black',
          shadowOpacity:1,
          shadowOffset:10,
          shadowRadius:2,
          borderColor:"#ce66fa",
          borderWidth:1,
          borderRadius:15,
          zIndex:1,
          paddingVertical:5,
          // paddingHorizontal:10
        }}
      >
        <View
          style={{
            flexDirection:"row",
            justifyContent:'space-between',
            borderBottomColor:'#ce66fa',
            borderBottomWidth:1,
            paddingHorizontal:10
          }}
        >
          <Fontsize>
            Hai,Dino
          </Fontsize>
          <Fontsize>
            Rp. 172.456
          </Fontsize>
        </View>
      </View>
    </View>
    <View
      style={{
        flex:2,
        backgroundColor:'white'
      }}
    >

    </View>


  </View>
  );
};

const styles = StyleSheet.create({
  ketengah:{
    flex:1,
    // alignItems:'center',
    // justifyContent:'center',
    backgroundColor:'#ce66fa',
  }
});

export default App;
