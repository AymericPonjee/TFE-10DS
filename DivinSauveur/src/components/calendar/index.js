import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ScrollView, Text, View, ImageBackground, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DETAILSEVENT} from '../../constants/routeNames';

import styles from './styles';

const CalenderComponent = ({listTab, events}) => {
  const {navigate} = useNavigation();
  const [status, setStatus] = useState('All');
  const setStatusFilter = status => {
    setStatus(status);
  };

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
