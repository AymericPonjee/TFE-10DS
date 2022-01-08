import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CALENDAR, CHAT, HOME, SETTINGS, SHOP} from '../constants/routeNames';
import Calendrier from '../screens/Calendrier';
import SideMenu from './SideMenu';
import Boutique from '../screens/Boutique';
import Chat from '../screens/Chat';
import Settings from '../screens/Settings';
import Home from '../screens/Home';


// const getDrawerContent = navigation => {
//   return <SideMenu navigation={navigation} />;
// };
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={props => <SideMenu {...props} />}>
      <Drawer.Screen name={HOME} component={Home} />
      <Drawer.Screen name={CALENDAR} component={Calendrier} />
      <Drawer.Screen name={SHOP} component={Boutique} />
      <Drawer.Screen name={CHAT} component={Chat} />
      <Drawer.Screen name={SETTINGS} component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
