import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ADDEVENT} from '../../constants/routeNames';
import {DETAILSEVENT} from '../../constants/routeNames';


import styles from './styles';

const CalendarComponent = ({ listTab }) => {

  const {navigate} = useNavigation();
  const [status, setStatus] = useState('All');
  const setStatusFilter = status=> {
    setStatus(status)
  }

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
          {listTab.map(e => (
            <TouchableOpacity
              style={[
                styles.btnTab,
                status === e.status && styles.btnTabActive,
              ]}
              onPress={() => setStatusFilter(e.status)}>
              <Text style={styles.textTab}>{e.status}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView>
          <View>
            <TouchableOpacity
              style={styles.listEvent}
              onPress={() => navigate(DETAILSEVENT)}>
              <Text style={styles.nameEvent}>Réunion</Text>
              <Text style={styles.lieuEvent}>Local</Text>
              <Text style={styles.dateEvent}>14 mars 2022</Text>
              <Text style={styles.sectionEvent}>All section</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.listEvent}
              onPress={() => navigate(DETAILSEVENT)}>
              <Text style={styles.nameEvent}>24h vélo</Text>
              <Text style={styles.lieuEvent}>Bois de la Cambre</Text>
              <Text style={styles.dateEvent}>25 mars 2022</Text>
              <Text style={styles.sectionEvent}>Éclaireurs</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.listEvent}
              onPress={() => navigate(DETAILSEVENT)}>
              <Text style={styles.nameEvent}>3HT</Text>
              <Text style={styles.lieuEvent}>Bois de Uccle</Text>
              <Text style={styles.dateEvent}>26 mars 2022</Text>
              <Text style={styles.sectionEvent}>Baladins</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View style={styles.sectionBot}>
        <TouchableOpacity
          style={styles.addEvent}
          primary
          onPress={() => navigate(ADDEVENT) }>
          <Text style={styles.add}>+</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default CalendarComponent;