import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {TouchableOpacity} from 'react-native';
import {DETAILSEVENT} from '../../constants/routeNames';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ListComponent from '../../components/animeList';

const List = () => {
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
        <TouchableOpacity onPress={() => navigate(DETAILSEVENT)}>
          <Ionicons
            name="chevron-back"
            size={35}
            color={'rgba(255,255,255,0.6)'}
            style={{paddingLeft: 10}}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigate();
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
  return <ListComponent />;
};

export default List;
