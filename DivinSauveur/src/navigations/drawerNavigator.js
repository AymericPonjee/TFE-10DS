import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

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
  ANIMELIST,
  SHOPSTACK,
  DETAILSITEM,
  UPDATEEVENT,
} from '../constants/routeNames';

import SideMenu from './sideMenu';
import CalendarPage from '../screens/calendar';
import ShopPage from '../screens/shop';
import Chat from '../screens/chat';
import Settings from '../screens/settings';
import Home from '../screens/home';
import AddEvent from '../screens/addEvent';
import DetailsEvent from '../screens/detailsEvent';
import AddItem from '../screens/addItem';
import List from '../screens/animeList';
import DetailsItem from '../screens/detailsItem';
import UpdateEvent from '../screens/updateEvent';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const CalendarStackView = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={CALENDAR} component={CalendarPage} />
      <Stack.Screen name={ADDEVENT} component={AddEvent} />
      <Stack.Screen name={UPDATEEVENT} component={UpdateEvent} />
      <Stack.Screen name={DETAILSEVENT} component={DetailsEvent} />
      <Stack.Screen name={ANIMELIST} component={List} />
    </Stack.Navigator>
  );
};

const Shop = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SHOP} component={ShopPage} />
      <Stack.Screen name={ADDITEM} component={AddItem} />
      <Stack.Screen name={DETAILSITEM} component={DetailsItem} />
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
        name={SHOPSTACK}
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
