import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CALENDAR, CHAT, HOME, SETTINGS, SHOP} from '../constants/routeNames';
import Calendrier from '../screens/Calendrier';
import SideMenu from './SideMenu';
import Boutique from '../screens/Boutique';
import Chat from '../screens/Chat';
import Settings from '../screens/Settings';
import Home from '../screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={props => <SideMenu {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: 'rgb(38,53,92)',
        drawerActiveTintColor: 'rgba(153,178,208,0.8)',
        drawerInactiveTintColor: 'rgb(38,53,92)',
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name={HOME}
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={CALENDAR}
        component={Calendrier}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="calendar-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SHOP}
        component={Boutique}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="card-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={CHAT}
        component={Chat}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbubbles-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SETTINGS}
        component={Settings}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
