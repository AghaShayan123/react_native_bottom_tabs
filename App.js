import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from './screens/Chat';
import Contact from './screens/Contacts';
import Histroy from './screens/History';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          inactiveTintColor: 'darkgray',
          activeTintColor: 'red'
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({color, focused}) => {
            let activeIcon, InactiveIcon;

            if(route.name == 'Chat'){
              activeIcon= 'chatbox'
              InactiveIcon = 'chatbox-outline'
            }
            else if(route.name == 'History'){
              activeIcon= 'time'
              InactiveIcon= 'time-outline'
            }
            else if(route.name == 'Home'){
              activeIcon= 'home'
              InactiveIcon= 'home-outline'
            }
            else if(route.name == 'Contact'){
              activeIcon= 'book'
              InactiveIcon= 'book-outline'
            }

            return(
              <>
                {
                  focused && 
                  <View style={{position: 'absolute', top: 0, borderTopColor: 'red', borderTopWidth: 3, width: '100%', paddingBottom: 20}} />
                }
                <Ionicons 
                  name={color == 'darkgray' ? activeIcon : InactiveIcon } 
                  color= {color == 'darkgray' ? 'lightgray' : 'red' }
                  size= {24}
                />
              </>
            )
          }
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="History" component={Histroy} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

})