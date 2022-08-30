import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import UpdateAnimeComponent from '../../components/updateAnime';

const UpdateAnime = props => {

  const anime = props.route?.params?.anime;

  const {setOptions, goBack} = useNavigation();

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
        <TouchableOpacity
          onPress={() =>
            goBack()
          }>
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
    <UpdateAnimeComponent
      anime={anime}
    />
  );
};

export default UpdateAnime;
