import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {deleteAnime, listAnime} from '../../context/actions/anime';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomModal from '../common/CustomModal';
import CheckBox from '@react-native-community/checkbox';
import Container from '../common/Container';
import styles from './styles';
import Colors from '../../assets/themes/Colors';
import {useFocusEffect} from '@react-navigation/core';
import {UPDATEANIME} from '../../constants/routeNames';

const AnimeList = props => {
  const {navigate} = useNavigation();
  const {section} = props;
  const [selectedAnime, setSelectedAnime] = useState();
  const [animes, setAnimes] = useState([]);

  const [visible, setVisible] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = fetchData();

      return () => unsubscribe;
    }, []),
  );

  const fetchData = () => {
    const params = {section: section};
    listAnime(params).then(resp => {
      setAnimes(resp.data);
    });
  };

  const handleDelete = anime => {
    Alert.alert(
      'Attention',
      'Êtes-vous sûr de vouloir supprimer ' +
        anime.name +
        ' ' +
        anime.firstname +
        ' ?',
      [
        {
          text: 'Oui',
          onPress: () =>
            deleteAnime(anime._id)
              .then(() => fetchData())
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
  };

  const handleUpdate = anime => {
    Alert.alert(
      'Attention',
      'Voulez-vous modifier ' + anime.name + ' ' + anime.firstname + ' ?',
      [
        {
          text: 'Oui',
          onPress: () => navigate(UPDATEANIME, {anime, section}),
        },
        {
          text: 'Non',
          styles: {
            color: 'red',
          },
        },
      ],
    );
  };

  return (
    <Container>
      <Text style={styles.title}>
        Liste de présence :{' '}
        <Text style={{color: Colors.success, fontWeight: 'bold'}}>
          {section}
        </Text>
      </Text>
      <CustomModal visible={visible}>
        {selectedAnime && (
          <>
            <View>
              <TouchableOpacity
                style={styles.closeModal}
                onPress={() => setVisible(false)}>
                <Ionicons
                  name={'close-circle-outline'}
                  size={24}
                  color={Colors.darkBlue}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: Colors.darkBlue,
              }}>
              <View style={styles.headerModal}>
                <Text style={styles.textModal}>Informations :</Text>
                <Text style={styles.nameModal}> {selectedAnime.name}</Text>
                <Text style={styles.firstnameModal}>
                  {' '}
                  {selectedAnime.firstname}
                </Text>
              </View>
            </View>
            <View style={{paddingVertical: 10}}>
              <Text style={styles.text}>Nom : {selectedAnime.name}</Text>
              <Text style={styles.text}>
                Prénom : {selectedAnime.firstname}
              </Text>
              {/* <Text>Date de naissance : {el.birthday}</Text> */}
              <Text style={styles.text}>Section : {selectedAnime.section}</Text>
              <Text style={styles.text}>Adresse : {selectedAnime.address}</Text>
              <Text style={styles.text}>
                Mail de contact : {selectedAnime.mailParent}
              </Text>
              <Text style={styles.text}>
                numéro de contact : {selectedAnime.numberParent}
              </Text>
            </View>
          </>
        )}
      </CustomModal>
      {animes &&
        animes?.map((el, idx) => {
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

                <TouchableOpacity
                  style={styles.info}
                  onPress={() => {
                    setVisible(true);
                    setSelectedAnime(el);
                  }}>
                  <Ionicons
                    name={'information-circle-outline'}
                    size={22}
                    color={Colors.lightGrey}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.options}>
                <TouchableOpacity
                  style={styles.more}
                  onPress={() => handleUpdate(el)}>
                  <MaterialCommunityIcons
                    name={'circle-edit-outline'}
                    size={30}
                    color={Colors.success}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.delete}
                  onPress={() => handleDelete(el)}>
                  <MaterialCommunityIcons
                    name={'close-circle-outline'}
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
