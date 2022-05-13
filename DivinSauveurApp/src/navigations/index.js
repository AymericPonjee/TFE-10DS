import React, {useContext} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../context/Provider';

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
