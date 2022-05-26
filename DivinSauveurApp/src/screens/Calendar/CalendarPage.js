import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';

import {TouchableOpacity} from 'react-native';
import { ADDEVENT } from '../../constants/routeNames';
import {fetchEvents} from '../../context/actions/event';

import Ionicons from 'react-native-vector-icons/Ionicons';
import CalendarComponent from '../../components/Calendar';


const Calendar = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const {navigate} = useNavigation();

  const listTab = [
    {
      status: 'All',
    },
    {
      status: 'Baladins',
    },
    {
      status: 'Mowha',
    },
    {
      status: 'Seeonee',
    },
    {
      status: 'Éclaireurs',
    },
    {
      status: 'Pionniers',
    },
  ];

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
            navigate(ADDEVENT);
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

  // array des events qu'on recup du backend
  const [events, setEvents] = useState([]);

  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    //fetchEvents().then(() => je traite la reponse de ma demande)
    //             .catch(() => une exception quelconque a ete levee, lire le message d'erreur pour investiguer)
    fetchEvents()
      .then(resp => {
        if (resp) {
          setEvents(resp.data);
        }
      })
      .catch(err => {
        console.log('err =>', err);
        window.alert('Une erreur est survenue');
      });
  });

  return <CalendarComponent listTab={listTab} events={events}/>;
};

export default Calendar;
