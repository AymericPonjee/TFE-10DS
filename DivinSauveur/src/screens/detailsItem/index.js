import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {TouchableOpacity} from 'react-native';
import {SHOP} from '../../constants/routeNames';

import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailsItemComponent from '../../components/detailsItem';

const DetailsItem = props => {
  const {setOptions, navigate} = useNavigation();

  const {navigation} = props;
  const {route} = props;

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
        <TouchableOpacity onPress={() => navigate(SHOP)}>
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

  return <DetailsItemComponent/>;
};

export default DetailsItem;
