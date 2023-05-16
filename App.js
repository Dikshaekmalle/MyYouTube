import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View,Pressable1,Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './component/Home';
import Short from './component/Shorts';
import Subsriptions from './component/Subsriptions';
import Library from './component/Library';
import Image  from 'react-native/Libraries/Image/Image';
import Feather from 'react-native-vector-icons/Feather';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Post from './component/Posts';
import Details from './component/Details';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionIOSSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
const Mycolor="#212121"
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
      </NavigationContainer>
      
       );
        }
     function TabNavigator(){
          return(
            <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
              options={{
        headerTitle:()=><YouTube/>,
        tabBarIcon:({focused})=>(
          <View style={{ alignItems:'center', justifyContent:'center', }}>
         
            <Text style={{color:focused?"#ff5a5f": '#748c94', fontSize:15,fontWeight:'bold'}}>
              <Feather name="home" size={25}  /></Text>
          </View>
        ),
        headerStyle:{
          height:50,

        }
      }}/>

        <Tab.Screen name="Short" component={Short} 
           options={{
            headerTitle:()=><Short/>,
            
            tabBarIcon:({focused})=>(
              <View style={{alignItems:'center', justifyContent:'center', }}>
             
                <Text style={{color:focused?"#ff5a5f": '#748c94', fontSize:12,fontWeight:'bold'}}>
                  <MaterialIcons name="video-collection" size={25}/></Text>
              </View>
            ),
            headerStyle:{
              height:50,

            }
          }}/>
          <Tab.Screen name="Post" component={Post}
              options={{
        headerTitle:()=><Post/>,
        
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center', justifyContent:'center',}}>
         
            <Text style={{color:focused?"#ff5a5f": '#748c94',fontSize:15,fontWeight:'bold'}}>
              <AntDesign name="pluscircleo" size={25}/></Text>
          </View>
        ),
        headerStyle:{
          height:50,

        }
      }}/>
       <Tab.Screen name="Subsriptions" component={Subsriptions} 
            options={{
              headerTitle:()=><Subsriptions/>,
              
              tabBarIcon:({focused})=>(
                <View style={{alignItems:'center', justifyContent:'center', }}>
               
                  <Text style={{color:focused?"#ff5a5f": '#748c94', fontSize:12,fontWeight:'bold'}}>
                    <MaterialCommunityIcon name="youtube-subscription" size={25}/></Text>
                </View>
              ),
              headerStyle:{
                height:50,

              }
            }}/>
        <Tab.Screen name="Library" component={Library}
                options={{
                  headerTitle:()=><Library/>,
                  
                  tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center', }}>
                   
                      <Text style={{color:focused?"#ff5a5f": '#748c94', fontSize:12,fontWeight:'bold'}}>
                        <MaterialIcons name="video-collection" size={25} /></Text>
                    </View>
                  ),
                  headerStyle:{
                    height:50,
      
                  }
                }} />
             
                
      </Tab.Navigator>
          );
              }

const YouTube =()=>{
  return(
    <View style={{
      marginBottom:2,
      width:"100%",
      height:50,
      backgroundColor:'white',
      flexDirection:"row",
      justifyContent:'space-between',
    
  
  }}>
      <View style={{flexDirection:'row',marginTop:6}}>
      <AntDesign style={{marginLeft:10}} name="youtube" size={32} color="red"/>
        <Text style={{fontSize:23, fontWeight:'bold', color:Mycolor}}> Youtube</Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around', width:170,marginTop:6}}>
        <Feather name='cast' size={30} color={Mycolor}/>
       <Ionicons name='notifications-outline' size={30} color={Mycolor}/>
       <Ionicons name='md-search' size={30} color={Mycolor}/>
       <MaterialCommunityIcon name='account-circle' size={30} color={Mycolor}/>
      </View>
  </View>
  )
}
function StackNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Details' component={Details}
      options={{headerShown:false,}}/>
      
    </Stack.Navigator>
  )
}
