import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ScrollView, Text, View, ImageBackground, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DETAILSEVENT} from '../../constants/routeNames';

import styles from './styles';

import {fetchEvents} from '../../context/actions/event';

const CalenderComponent = ({listTab}) => {
  const {navigate} = useNavigation();
  const [status, setStatus] = useState('All');
  const setStatusFilter = status => {
    setStatus(status);
  };

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

  return (
    <ImageBackground
      source={require('../../assets/images/Background.jpg')}
      style={styles.imageBg}>
      <StatusBar barStyle="light-content" />

      <View style={styles.sectionTop}>
        <Text style={styles.title}>
          Voici les prochains évènements à venir :
        </Text>

        <View style={styles.listTab}>
          {listTab.map((e, idx) => (
            <TouchableOpacity
              style={[
                styles.btnTab,
                status === e.status && styles.btnTabActive,
              ]}
              onPress={() => setStatusFilter(e.status)}
              key={idx}>
              <Text style={styles.textTab}>{e.status}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView>
          <View>
            {events.map((event, indice) => (
              <TouchableOpacity
                style={styles.listEvent}
                onPress={() => navigate(DETAILSEVENT, {event})}
                key={indice}>
                <Text style={styles.nameEvent}>{event.name}</Text>
                <Text style={styles.lieuEvent}>{event.address}</Text>
                <Text style={styles.dateEvent}>{event.beginAt}</Text>
                <Text style={styles.sectionEvent}>{event.section}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
export default CalenderComponent;
