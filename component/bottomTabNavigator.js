import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import TransactionScreen from '../screens/TransactionScreen';
import SearchScreen from '../screens/searchScreen';
import Ionicons from "react-native-vector-icons/Ionicons"
const Tab= createBottomTabNavigator()

export default class BottomTabNavigator extends React.Component{
 render(){
 return(
 <NavigationContainer
 screenOptions={({route})=>({
  tabBarIcon:({focused,color,size}) =>{
let iconName      
if(route.name==="Transaction"){
iconName="book"
}
else if(route.name==="Search"){
iconName="search"
}
return (
 <Ionicons
 name={iconName}
 size={size}
 color={color}
 ></Ionicons>   
)
  }  
 })}
 tabBarOptions={{
 activeTintColor:"white",
 inactiveTintColor:"black",
 style:{
 height:130,
 borderTopWidth:0,
 backgroundColor:"#5653d4",

 },
 labelStyle :{
     fontSize:20,
     
 },
 labelPosition:"beside-icon",
 tabStyle:{
     margineTop:25,
     marginLeft:10,
     marginRight:10,
     borderRadius:30,
     borderWidth:2,
     alignItems:"centre",
     justifyContent:"centre",
     backgroundColor:"#5653d4"
 }

 }}
 > 
  <Tab.Navigator>
  <Tab.Screen name="Transaction" component={TransactionScreen}/>
  <Tab.Screen name="Search" component={SearchScreen}/> 
  
     
      </Tab.Navigator>   
 </NavigationContainer>       
 )    
 }   
}
