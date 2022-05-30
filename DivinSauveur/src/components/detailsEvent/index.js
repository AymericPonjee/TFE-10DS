import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/themes/Colors';

import Container from '../common/Container';

import styles from './styles';

const DetailsEventComponent = ({props, navigation, event}) => {
  return (
    <Container>
      <View style={styles.sectionTitre}>
        <Text style={styles.titre}>{event.name}</Text>
        <Text style={styles.date}>{event.beginAt} au {event.endAt}</Text>
        <Text style={styles.lieu}>{event.address}</Text>
      </View>

      <View style={styles.sectionDescription}>
        <Text style={styles.sousTitre}>Description :</Text>
        <Text style={styles.text}>{event.comment}</Text>
      </View>

      <View style={styles.sectionPresence}>
        <Text style={styles.sousTitre}>Présence :</Text>
        {event.section.map((el, indice) => (
          <TouchableOpacity style={styles.buttonSection} key={indice}>
            <Text style={styles.textSection}>{el}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.sectionModif}>
        <TouchableOpacity style={styles.buttonModif}>
          <Ionicons
            name="ios-create-outline"
            size={23}
            color={colors.darkBlue}
          />
          <Text style={styles.modif}>Modifier</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSupp}>
          <Ionicons name="close-outline" size={25} color={colors.danger} />
          <Text style={styles.supp}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default DetailsEventComponent;
