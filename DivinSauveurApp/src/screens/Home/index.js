import {useNavigation} from '@react-navigation/core';
import React from 'react';

import { TouchableOpacity} from 'react-native';
import HomeComponent from '../../components/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const {setOptions, toggleDrawer} = useNavigation();

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
    });
  }, []);

  return (
    <HomeComponent />
  )
};

export default Home;
