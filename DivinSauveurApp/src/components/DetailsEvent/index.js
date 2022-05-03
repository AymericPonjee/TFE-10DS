import React from 'react';
import { View , Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/themes/colors';

import Container from '../../components/common/Container';

import styles from './styles';

const DetailsEventComponent = ({}) => {

  return (
    <Container>
      <View style={styles.sectionTitre}>
        <Text style={styles.titre}>Titre</Text>
        <Text style={styles.date}>Date</Text>
        <Text style={styles.lieu}>Lieu</Text>
      </View>

      <View style={styles.sectionDescription}>
        <Text style={styles.sousTitre}>Description :</Text>
        <Text style={styles.text}>la description de l'event</Text>
      </View>

      <View style={styles.sectionPresence}>
        <Text style={styles.sousTitre}>Présence :</Text>
        <TouchableOpacity style={styles.buttonSection}>
          <Text style={styles.textSection}>Baladins</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSection}>
          <Text style={styles.textSection}>Mowha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSection}>
          <Text style={styles.textSection}>Seeonee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSection}>
          <Text style={styles.textSection}>Éclaireurs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSection}>
          <Text style={styles.textSection}>Pionniers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSection}>
          <Text style={styles.textSection}>Chefs</Text>
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

export default DetailsEventComponent;
