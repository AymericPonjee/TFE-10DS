import React from 'react';

import {ScrollView, Text, View, ImageBackground, StatusBar} from 'react-native';
import styles from './styles';
import CustomButton from '../common/CustomButton';

const CalendarComponent = ({}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/Background.jpg')}
      style={styles.imageBg}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.sectionTop}>
        <Text style={styles.title}>Voici les prochains evenements à venir</Text>

        <ScrollView>
          <View style={styles.event}>
            <Text>Liste des evenements</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.sectionBot}>
        <CustomButton style={styles.addEvent} primary title="+" />
      </View>
    </ImageBackground>
  );
};
export default CalendarComponent;