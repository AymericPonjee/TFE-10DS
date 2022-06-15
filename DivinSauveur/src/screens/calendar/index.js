import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {useFocusEffect} from '@react-navigation/native';

import {TouchableOpacity} from 'react-native';
import {ADDEVENT} from '../../constants/routeNames';
import {fetchEvents} from '../../context/actions/event';

import Ionicons from 'react-native-vector-icons/Ionicons';
import CalendarComponent from '../../components/calendar';
import Colors from '../../assets/themes/Colors';

const SECTIONS = {
  Baladins: {
    iconColor: Colors.baladins,
    logo: 'B',
  },
  Mowha: {
    iconColor: Colors.loups,
    logo: 'M',
  },
  Seeonee: {
    iconColor: Colors.loups,
    logo: 'S',
  },
  Éclaireurs: {
    iconColor: Colors.eclaireurs,
    logo: 'E',
  },
  Pionniers: {
    iconColor: Colors.danger,
    logo: 'P',
  },
  Chefs: {
    iconColor: Colors.chefs,
    logo: 'C',
  },
};

const getArrayOfSections = dictionary => {
  const arrayOfSections = [];
  Object.entries(dictionary).forEach(([key, value]) => {
    if (value == true) {
      arrayOfSections.push(key);
    }
  });
  return arrayOfSections;
};

const Calendar = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const {navigate} = useNavigation();

  // array des events qu'on recup du backend
  const [events, setEvents] = useState([]);
  const [combinedStatus, setCombinedStatus] = useState({});

  useFocusEffect(
    React.useCallback(() => {
      const selectedSections = getArrayOfSections(combinedStatus);
      const unsubscribe = filterEventsBySections(selectedSections);

      return () => unsubscribe;
    
    }, [combinedStatus]),
  );

  useEffect(() => {
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

  const filterEventsBySections = chooseSections => {
    const params = {section: chooseSections};
    fetchEvents(params)
      .then(resp => {
        if (resp) {
          setEvents(resp.data);
        }
      })
      .catch(err => {
        console.log('err =>', err);
        window.alert('Une erreur est survenue');
      });
  };

  return (
    <CalendarComponent
      setCombinedStatus={setCombinedStatus}
      combinedStatus={combinedStatus}
      sections={SECTIONS}
      events={events}
    />
  );
};

export default Calendar;
