import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ScrollView, Text, View, ImageBackground, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DETAILSEVENT} from '../../constants/routeNames';

import styles from './styles';
import Colors from '../../assets/themes/Colors';

const CalenderComponent = ({
  combinedStatus,
  setCombinedStatus,
  sections,
  events,
}) => {
  const {navigate} = useNavigation();
  const setStatusFilter = selectedStatus => {
    if (combinedStatus[selectedStatus] == true) {
      combinedStatus[selectedStatus] = false;
      setCombinedStatus({...combinedStatus}, {selectedStatus: true});
    } else {
      combinedStatus[selectedStatus] = true;
      setCombinedStatus({...combinedStatus}, {selectedStatus: false});
    }
  };

  const generateLogo = (title, color, idx) => {
    return (
      <View
        key={idx}
        style={{
          paddingHorizontal: 2,
        }}>
        <View
          style={{
            borderRadius: 50,
            width: 20,
            height: 20,
            alignItems: 'center',
            backgroundColor: color,
            paddingTop: 2,
          }}>
          <Text
            style={{
              color: Colors.white,
            }}>
            {title}
          </Text>
        </View>
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
              style={[
                styles.btnTab,
                combinedStatus[e] === true && styles.btnTabActive,
              ]}
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
                  {new Date(event.beginAt).toLocaleDateString('fr')}
                </Text>
                <Text style={styles.sectionEvent}>
                  {event.section.map((el, idx) => {
                    return generateLogo(
                      sections[el].logo,
                      sections[el].iconColor,
                      idx,
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
