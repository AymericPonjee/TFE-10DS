import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {Text, View, TouchableOpacity, Image} from 'react-native';
import {DETAILSITEM} from '../../constants/routeNames';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Container from '../common/Container';
import styles from './styles';

const BoutiqueComponent = ({}) => {
  const {setOptions, navigate} = useNavigation();

  return (
    <Container style={{paddingTop: 100}}>
      <Text style={styles.title}>
        Voici la liste des achats disponible dans l'unité :
      </Text>
      <View>
        <TouchableOpacity
          style={styles.list}
          onPress={() => navigate(DETAILSITEM)}
        >
          <Image
            style={styles.img}
            source={require('../../assets/images/shop/Cotisation.jpeg')}
          />
          <View>
            <Text style={styles.nameItems}>Cotisation</Text>
            <Text style={styles.priceItems}>60€</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={25}
            color={'rgba(255,255,255,0.6)'}
            style={{paddingLeft: 65, paddingTop: 35}}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.list}
          onPress={() => navigate(DETAILSITEM)}
        >
          <Image
            style={styles.img}
            source={require('../../assets/images/shop/Foulard.jpeg')}
          />
          <View>
            <Text style={styles.nameItems}>Foulard</Text>
            <Text style={styles.priceItems}>10€</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={25}
            color={'rgba(255,255,255,0.6)'}
            style={{paddingLeft: 100, paddingTop: 35}}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default BoutiqueComponent;
