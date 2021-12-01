import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { GlobalContext } from '../context/Provider';

import HomeNavigator from './HomeNavigator';
import SideMenu from './SideMenu';

import { HOME_NAVIGATOR } from '../constants/routeNames';

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator 
      drawerType="slide"
      drawerContent={({ navigation }) =>
        getDrawerContent(navigation, authDispatch)
      }
    >
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawNavigator;