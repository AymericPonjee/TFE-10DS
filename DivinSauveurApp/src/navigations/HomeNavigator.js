import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { CALENDAR, CHAT, SETTINGS, SHOP } from '../constants/routeNames';
import Calendrier from '../screens/Calendrier';
import Boutique from '../screens/Boutique';
import Chat from '../screens/Chat';
import Settings from '../screens/Settings';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CALENDAR}>
      <HomeStack.Screen name={CALENDAR} component={Calendrier} />
      <HomeStack.Screen name={SHOP} component={Boutique} />
      <HomeStack.Screen name={CHAT} component={Chat} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;