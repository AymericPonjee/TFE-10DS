import React from 'react';

import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AddEventComponent from '../../components/addEvent';

import {CALENDAR} from '../../constants/routeNames';

const AddEvent = () => {
  const {setOptions, navigate} = useNavigation();

  React.useEffect(() => {
    setOptions({
      headerTransparent: true,
      headerStyle: {
        height: 100,
      },
      headerTintColor: 'rgba(255,255,255,0.6)',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 26,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigate(CALENDAR)}>
          <Ionicons
            name="chevron-back"
            size={35}
            color={'rgba(255,255,255,0.6)'}
            style={{paddingLeft: 10}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  
  return (
    <AddEventComponent 
    />
  );
};

export default AddEvent;
