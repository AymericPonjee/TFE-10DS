import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {useFocusEffect} from '@react-navigation/native';

import {TouchableOpacity} from 'react-native';
import {ADDANIME, DETAILSEVENT} from '../../constants/routeNames';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AnimeList from '../../components/animeList';
import {listAnime} from './../../context/actions/anime';
const List = props => {
  const {setOptions, navigate} = useNavigation();
  const event = props.route?.params?.event;
  const [animes, setAnimes] = useState([]);

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
        <TouchableOpacity onPress={() => navigate(DETAILSEVENT, {event})}>
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
            navigate(ADDANIME, {event});
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

  console.log('animes =>', animes);

  useFocusEffect(
    React.useCallback(() => {
      //const selectedSections = getArrayOfSections(combinedStatus);
      const unsubscribe = listAnime().then(resp => {
        setAnimes(resp.data);
      });
      return () => unsubscribe;
    }, []),
  );

  return <AnimeList event={event} animes={animes} />;
};

export default List;
