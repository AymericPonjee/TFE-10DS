import {useNavigation} from '@react-navigation/core';
import React from 'react';

import {TouchableOpacity} from 'react-native';
import { ADDITEM } from '../../constants/routeNames';

import Ionicons from 'react-native-vector-icons/Ionicons';
import BoutiqueComponent from '../../components/shop';

const Boutique = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const {navigate} = useNavigation();

  React.useEffect(() => {
    setOptions({
      headerTransparent: true,
      headerStyle: {
        height: 100,
      },
      headerTintColor: 'rgba(255,255,255,0.6)',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Ionicons
            name="menu"
            size={35}
            color={'rgba(255,255,255,0.6)'}
            style={{paddingLeft: 10}}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigate(ADDITEM);
          }}>
          <Ionicons
            name="add"
            size={35}
            color={'rgba(255,255,255,0.6)'}
            style={{paddingRight: 10}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <BoutiqueComponent />
  );
};

export default Boutique;
