import React, {useContext} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import AuthNavigator from './authNavigator';
import DrawerNavigator from './drawerNavigator';
import {GlobalContext} from '../context/provider';

const AppNavContainer = () => {
  const {authenticated} = useContext(GlobalContext);
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <DrawerNavigator />
      {/* {authenticated ? <DrawerNavigator /> : <AuthNavigator />}  */}
    </NavigationContainer>
  );
};

export default AppNavContainer;
