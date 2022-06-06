import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {View, Text, Image, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/themes/Colors';
import Container from '../common/Container';
import styles from './styles';

const DetailsItemComponent = ({}) => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <View style={styles.sectionTitre}>
        <Image
          style={styles.img}
          source={require('../../assets/images/shop/Foulard.jpeg')}
        />
        <Text style={styles.titre}>Foulard</Text>
        <Text style={styles.prix}>10€</Text>
      </View>
      <View style={styles.sectionDescription}>
        <Text style={styles.sousTitre}>Description :</Text>
        <Text style={styles.text}>description de l'article</Text>
      </View>
      <View style={styles.sectionAjout}>
        <TouchableOpacity style={styles.buttonAjout}>
          <Ionicons name="cart-outline" size={22} color={colors.success} />
          <Text style={styles.ajout}>Ajouter au panier</Text>
        </TouchableOpacity>
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

export default DetailsItemComponent;
