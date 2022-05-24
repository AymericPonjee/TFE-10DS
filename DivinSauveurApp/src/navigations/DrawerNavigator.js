import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  DETAILSEVENT,
  ADDEVENT,
  CALENDAR,
  CHAT,
  HOME,
  SETTINGS,
  SHOP,
  ADDITEM,
  CALENDARSTACK,
} from '../constants/routeNames';

import SideMenu from './SideMenu';
import CalendarPage from '../screens/Calendar/CalendarPage';
import Boutique from '../screens/Boutique';
import Chat from '../screens/Chat';
import Settings from '../screens/Settings';
import Home from '../screens/Home';
import AddEvent from '../screens/AddEvent';
import DetailsEvent from '../screens/DetailsEvent';
import AddItem from '../screens/AddItem';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const CalendarStackView = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={CALENDAR} component={CalendarPage} />
      <Stack.Screen name={ADDEVENT} component={AddEvent} />
      <Stack.Screen name={DETAILSEVENT} component={DetailsEvent} />
    </Stack.Navigator>
  );
};

const Shop = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SHOP} component={Boutique} />
      <Stack.Screen name={ADDITEM} component={AddItem} />
    </Stack.Navigator>
  );
};

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
        name={CALENDARSTACK}
        component={CalendarStackView}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Ionicons name="calendar-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={SHOP}
        component={Shop}
        options={{
          headerShown: false,
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
