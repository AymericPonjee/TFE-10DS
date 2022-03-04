import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ADDEVENT} from '../../constants/routeNames';

import styles from './styles';

const CalendarComponent = ({}) => {

  const {navigate} = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/images/Background.jpg')}
      style={styles.imageBg}>
      <StatusBar barStyle="light-content" />

      <View style={styles.sectionTop}>
        <Text style={styles.title}>Voici les prochains évènements à venir</Text>

        <ScrollView>
          <View style={styles.event}>
            <Text>Liste des évènements</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.sectionBot}>
        <TouchableOpacity
          style={styles.addEvent}
          primary
          onPress={() => navigate(ADDEVENT)}>
          <Text style={styles.add}>+</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default CalendarComponent;