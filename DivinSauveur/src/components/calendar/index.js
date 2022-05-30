import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ScrollView, Text, View, ImageBackground, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DETAILSEVENT} from '../../constants/routeNames';

import styles from './styles';
import Colors from '../../assets/themes/Colors';


const CalenderComponent = ({sections, events}) => {
  const {navigate} = useNavigation();
  const [status, setStatus] = useState('All');
  const setStatusFilter = status => {
    setStatus(status);
  };

  const generateLogo = (title, color) => {
    return (
      <View
        style={{
          borderRadius: 50,
          width: 16,
          height: 16,
          alignItems: 'center',
          backgroundColor: color,
        }}>
        <Text
          style={{
            color: Colors.white,
          }}>
          {title}
        </Text>
      </View>
    );
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
          {Object.keys(sections).map((e, idx) => (
            <TouchableOpacity
              style={[styles.btnTab, status === e && styles.btnTabActive]}
              onPress={() => setStatusFilter(e)}
              key={idx}>
              <Text style={styles.textTab}>{e}</Text>
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
                <Text style={styles.dateEvent}>
                  {new Date(event.beginAt).toLocaleDateString()} 
                </Text>
                <Text style={styles.sectionEvent}>
                  {event.section.map(el => {
                    return generateLogo(
                      sections[el].logo,
                      sections[el].iconColor,
                    );
                  })}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
export default CalenderComponent;
