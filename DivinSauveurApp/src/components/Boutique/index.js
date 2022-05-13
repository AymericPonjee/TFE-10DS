import React from 'react';

import {Text, View, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/themes/colors';
import Container from '../../components/common/Container';
import styles from './styles';

const HomeComponent = ({}) => {

  return (
    <Container style={{paddingTop: 100}}>
      <Text style={styles.title}>
        Voici les prochains évènements à venir :{' '}
      </Text>
      <View>
        <TouchableOpacity
          style={styles.list}
          // onPress={() => navigate(DETAILSEVENT)}
        >
          <Text style={styles.nameEvent}>Image</Text>
          <Text style={styles.lieuEvent}>Nom</Text>
          <Text style={styles.dateEvent}>Prix</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default HomeComponent;
