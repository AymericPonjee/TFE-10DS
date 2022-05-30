import {useNavigation} from '@react-navigation/core';
import React from 'react';

import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DetailsEventComponent from '../../components/detailsEvent';
import {CALENDAR} from '../../constants/routeNames';

const DetailsEvent = (props) => {
  const {setOptions, navigate} = useNavigation();

  const { navigation } = props;
  const { route } = props;

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

  return <DetailsEventComponent event={route.params.event} />;
};

export default DetailsEvent;
