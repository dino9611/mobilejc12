/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList
} from 'react-native';
import {styles} from './component/style'
import Fontsize from './component/fontssize';
// import {Icon} from 'native-base'
import {Avatar} from 'react-native-elements'
import { Button,CheckBox,Divider,Header,Input,Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
var DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '4',
    title: '4 Item',
  },
  {
    id: '5',
    title: '5 Item',
  },
  {
    id: '6',
    title: '6 Item',
  },
  {
    id: '7',
    title: '7 Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}


const App= () => {
  const onRefresh1=()=>{
    setrefresh(true)
    console.log('masuk refresh')
    setTimeout(() => {
      console.log('selesai')
      DATA.push({
        id:'100',
        title:'isi seratus'
      })
      setrefresh(false)
    }, 3000);
  }
  const [refresh,setrefresh]=useState(false)
  const [checked,setchecked]=useState(false)
  const [visible,setvisible]=useState(true)
  return (
    
    <View
      style={{
        flex:1,
      }}
    >
     
        <Header
          containerStyle={{padding:0}}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />

        <Button
          title="Outline button"
          type="outline"
        />
        <Button
          icon={
            <Icon
              name="arrow-right"
              size={15}
              color="white"
            />
          }
          title="Button with icon component"
        />
        <Button
          containerStyle={{
            width:50,
            height:100,
            margin:3
          }}
          buttonStyle={{
            backgroundColor:'black'
          }}
          title="Loading button"
          loading
        />
        <CheckBox
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          title='show password'
          onPress={()=>setchecked(!checked)}
          checked={checked}
        />
        <Input
          placeholder='password'
          secureTextEntry={visible}
          leftIcon={<Icon name='lock' color='blue' size={24}/>}
          rightIcon={
            <Icon 
              name={visible ? 'visibility':'visibility-off' }
              size={24}
              onPress={()=>setvisible(!visible)}
              color={visible?'blue':'gray'}
            />
          }

        />
        {/* <Divider style={{ backgroundColor: 'blue' }} /> */}
       {/* <Avatar
          rounded
          icon={{name: 'home'}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
        /> */}
    </View>

  // <View style={styles.ketengah}>
  //   <StatusBar backgroundColor={'#ce66fa'}/>
  //   <ScrollView>

  //     <View
  //       style={{
  //         flex:1,
  //         paddingHorizontal:25,
  //       }}
  //     >
  //       <View 
  //         style={{
  //           height:250,
  //           backgroundColor:'white',
  //           position:'relative',
  //           top:50,
  //           shadowColor:'black',
  //           shadowOpacity:1,
  //           shadowOffset:10,
  //           shadowRadius:2,
  //           borderColor:"#ce66fa",
  //           borderWidth:1,
  //           borderRadius:15,
  //           zIndex:1,
  //           paddingVertical:5,
  //           // paddingHorizontal:10
  //         }}
  //       >
  //         <View
  //           style={{
  //             flexDirection:"row",
  //             justifyContent:'space-between',
  //             borderBottomColor:'#ce66fa',
  //             borderBottomWidth:1,
  //             paddingHorizontal:10
  //           }}
  //         >
  //           <Fontsize besarhuruf=20>
  //             Hai,Dino
  //           </Fontsize>
  //           <Fontsize>
  //             Rp. 172.456
  //           </Fontsize>
  //         </View>
  //       </View>
  //     </View>
  //     <View
  //       style={{
  //         flex:2,
  //         backgroundColor:'white'
  //       }}
  //     >       
      //  </View>
      // </ScrollView> 

  // </View>
  );
};


export default App;
