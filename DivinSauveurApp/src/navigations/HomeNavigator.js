import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import { CALENDAR, ADDEVENT, CHAT, HOME, SETTINGS, SHOP} from '../constants/routeNames';
import Calendrier from '../screens/Calendrier';
import AddEvent from '../screens/AddEvent';
import Boutique from '../screens/Boutique';
import Chat from '../screens/Chat';
import Settings from '../screens/Settings';
import Home from '../screens/Home';


const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={HOME}>
      <HomeStack.Screen name={HOME} component={Home} />
      <HomeStack.Screen name={CALENDAR} component={Calendrier} />
      <HomeStack.Screen name={ADDEVENT} component={AddEvent} />
      <HomeStack.Screen name={SHOP} component={Boutique} />
      <HomeStack.Screen name={CHAT} component={Chat} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
