import React from 'react';
//import {useNavigation} from '@react-navigation/native';

import {View, Text, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import Container from '../common/Container';
import styles from './styles';
import Colors from '../../assets/themes/Colors';

const AnimeList = ({animes}) => {
  //const {navigate} = useNavigation();


  return (
    <Container>
      <Text style={styles.title}>Liste de présence :</Text>
      {animes && animes?.map((el, idx) => {
        return (
          <View key={idx} style={styles.containerList}>
            <View style={styles.sousContainerList}>
              <CheckBox
                style={styles.presence}
                hideBox
                onCheckColor={Colors.lightGrey}
              />
              <Text style={styles.name}>{el.name}</Text>
              <Text style={styles.firstname}>{el.firstname}</Text>
              <TouchableOpacity style={styles.info}>
                <Ionicons
                  name={'information-circle-outline'}
                  size={22}
                  color={Colors.lightGrey}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.options}>
              <TouchableOpacity style={styles.more}>
                <Ionicons
                  name={'md-ellipsis-horizontal-circle'}
                  size={30}
                  color={Colors.success}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.delete}>
                <Ionicons
                  name={'ios-close-circle-outline'}
                  size={30}
                  color={Colors.danger}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </Container>
  );
};

export default AnimeList;
