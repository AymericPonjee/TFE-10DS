import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {ANIMELIST, CALENDAR, UPDATEEVENT} from '../../constants/routeNames';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/themes/Colors';
import Container from '../common/Container';
import styles from './styles';
import { deleteEvent } from '../../context/actions/event';

const DetailsEventComponent = ({event}) => {
  const {navigate} = useNavigation();

  const handleDelete = () => {
    Alert.alert(
      'Attention',
      'Êtes-vous sûr de vouloir supprimer ' + event.name + ' ?',
      [
        {
          text: 'Oui',
          onPress: () =>
            deleteEvent(event._id)
              .then(res => {
                if (res) {
                  navigate(CALENDAR);
                }
              })
              .catch(err => console.log('err delete', err)),
        },
        {
          text: 'Non',
          styles: {
            color: 'red',
          },
        },
      ],
    ); 
  }

  return (
    <Container>
      <View style={styles.sectionTitre}>
        <Text style={styles.titre}>{event.name}</Text>
        <Text style={styles.date}>
          Début : {''}
          {new Date(event.beginAt).toLocaleString('fr', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
        <Text style={styles.date}>
          Fin : {''}
          {new Date(event.endAt).toLocaleString('fr', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
        <Text style={styles.lieu}>{event.address}</Text>
      </View>

      <View style={styles.sectionDescription}>
        <Text style={styles.sousTitre}>Description :</Text>
        <Text style={styles.text}>{event.comment}</Text>
      </View>

      <View style={styles.sectionPresence}>
        <Text style={styles.sousTitre}>Présence :</Text>
        {event.section.map((el, indice) => (
          <TouchableOpacity
            style={styles.buttonSection}
            key={indice}
            onPress={() => navigate(ANIMELIST, {event, section: el})}>
            <Text style={styles.textSection}>{el}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.sectionModif}>
        <TouchableOpacity
          style={styles.buttonModif}
          onPress={() => navigate(UPDATEEVENT, {event})}>
          <Ionicons
            name="ios-create-outline"
            size={23}
            color={colors.darkBlue}
          />
          <Text style={styles.modif}>Modifier</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSupp}
          onPress={() => handleDelete()}>
          <Ionicons name="close-outline" size={25} color={colors.danger} />
          <Text style={styles.supp}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default DetailsEventComponent;
