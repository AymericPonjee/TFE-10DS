import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {TouchableOpacity} from 'react-native';
import {DETAILSEVENT} from '../../constants/routeNames';

import Ionicons from 'react-native-vector-icons/Ionicons';
import UpdateEventComponent from '../../components/updateEvent';

const UpdateEvent = props => {
  const {setOptions, navigate} = useNavigation();
  const event = props.route.params.event;

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
        <TouchableOpacity onPress={() => navigate(DETAILSEVENT, {event})}>
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

  return <UpdateEventComponent event={event} />;
};

export default UpdateEvent;
