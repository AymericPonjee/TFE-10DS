import React from 'react';
//import {useNavigation} from '@react-navigation/native';

import {View, Text, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import Container from '../common/Container';
import styles from './styles';
import Colors from '../../assets/themes/Colors';

const ListComponent = ({}) => {
  //const {navigate} = useNavigation();

  return (
    <Container>
      <Text style={styles.title}>Liste de présence :</Text>
      <View style={styles.containerList}>
        <CheckBox style={styles.presence} hideBox />
        <Text style={styles.name}>NOM</Text>
        <Text style={styles.firstname}>Prénom</Text>
        <TouchableOpacity style={styles.more}>
          <Ionicons
            name={'ellipsis-horizontal'}
            size={20}
            color={Colors.darkBlue}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerList}>
        <CheckBox style={styles.presence} hideBox />
        <Text style={styles.name}>NOM</Text>
        <Text style={styles.firstname}>Prénom</Text>
        <TouchableOpacity style={styles.more}>
          <Ionicons
            name={'ellipsis-horizontal'}
            size={20}
            color={Colors.darkBlue}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default ListComponent;
