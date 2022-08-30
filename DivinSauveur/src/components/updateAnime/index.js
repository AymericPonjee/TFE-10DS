import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import {View, Text, Alert} from 'react-native';

import Container from '../../components/common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../../components/common/Input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import {RadioButtonContainer} from '../common/RadioButtonContainer';
import {SECTIONS} from '../../constants/models';
import {updateAnime} from '../../context/actions/anime';

const UpdateAnimeComponent = ({anime}) => {
  const [selectedSection, setSelectedSection] = useState(
    Object.keys(SECTIONS)[0],
  );

  const {goBack} = useNavigation();
  const [errors, setErrors] = useState({});
  const [name, setName] = useState(anime.name || '');
  const [firstname, setFirstname] = useState(anime.firstname || '');
  const [nationalNumber, setNationalNumber] = useState(
    anime.nationalNumber || '',
  );
  const [address, setAddress] = useState(anime.address || '');
  const [mailParent, setMailParent] = useState(anime.mailParent || '');
  const [numberParent, setNumberParent] = useState(anime.numberParent || '');


  const handleSubmit = () => {
    checkErrors().then(resp => {
      if (Object.keys(resp).length == 0) {
        const updatedAnime = {
          _id: anime._id,
          name: name,
          firstname: firstname,
          nationalNumber: nationalNumber,
          address: address,
          mailParent: mailParent,
          numberParent: numberParent,
          section: selectedSection,
        };

        updateAnime(updatedAnime)
          .then(resp => {
            if (resp) {
              Alert.alert('Bravo', "L'animé a bien été modifié !");
            }
          })
          .then(() => {
            // return navigate(ANIMELIST, {section});
            return goBack();
          })
          .catch(err => console.log('err =>', err.status));
      }
    });
  };

  const checkErrors = () => {
    const err = {};
    if (!name || name === '') {
      err['name'] = "Veuillez entrer le nom de l'animé";
    }
    if (!firstname || firstname === '') {
      err['firstname'] = "Veuillez entrer le prénom de l'animé";
    }
    if (!nationalNumber || nationalNumber === '') {
      err['nationalNumber'] = "Veuillez entrer le numéro national de l'animé";
    }
    if (!address || address === '') {
      err['address'] = "Veuillez entrer l'adresse de l'animé";
    }
    if (!mailParent || mailParent === '') {
      err['mailParent'] = "Veuillez entrer un mail de contact pour l'animé";
    }
    if (!numberParent || numberParent === '') {
      err['numberParent'] = "Veuillez entrer un numéro de contact pour l'animé";
    }
    setErrors(err);
    return Promise.resolve(err);
  };
  
  return (
    <Container>
      <View>
        <Text style={styles.title}>Veuillez Complèter le formulaire :</Text>
      </View>

      <View style={styles.form}>
        <Input
          type="text"
          name="name"
          value={name}
          autoCorrect={false}
          placeholder="Nom*"
          onChangeText={value => {
            if (!value || value == '') {
              setName(undefined);
            } else {
              setName(value);
            }
          }}
          icon={
            <Ionicons
              name={'person-outline'}
              size={22}
              color={'rgba(153,178,208,0.7)'}
              style={styles.InputIcon}
            />
          }
          iconPosition="right"
          error={
            name === undefined
              ? 'Ce champ est obligatoire'
              : errors['name']
              ? errors['name']
              : undefined
          }
        />
        <Input
          type="text"
          name="firstname"
          value={firstname}
          autoCorrect={false}
          placeholder="Prénom*"
          onChangeText={value => {
            if (!value || value == '') {
              setFirstname(undefined);
            } else {
              setFirstname(value);
            }
          }}
          icon={
            <Ionicons
              name={'person-outline'}
              size={22}
              color={'rgba(153,178,208,0.7)'}
              style={styles.InputIcon}
            />
          }
          iconPosition="right"
          error={
            firstname === undefined
              ? 'Ce champ est obligatoire'
              : errors['firstname']
              ? errors['firstname']
              : undefined
          }
        />
        <Input
          type="text"
          name="nationalNumber"
          value={nationalNumber}
          autoCorrect={false}
          placeholder="Numéro national*"
          onChangeText={value => {
            if (!value || value == '') {
              setNationalNumber(undefined);
            } else {
              setNationalNumber(value);
            }
          }}
          icon={
            <Ionicons
              name={'card-outline'}
              size={22}
              color={'rgba(153,178,208,0.7)'}
              style={styles.InputIcon}
            />
          }
          iconPosition="right"
          error={
            nationalNumber === undefined
              ? 'Ce champ est obligatoire'
              : errors['nationalNumber']
              ? errors['nationalNumber']
              : undefined
          }
        />
        <Input
          type="text"
          name="address"
          value={address}
          placeholder="Adresse*"
          onChangeText={value => {
            if (!value || value == '') {
              setAddress(undefined);
            } else {
              setAddress(value);
            }
          }}
          icon={
            <Ionicons
              name={'home-outline'}
              size={23}
              color={'rgba(153,178,208,0.7)'}
            />
          }
          iconPosition="right"
          error={
            address === undefined
              ? 'Ce champ est obligatoire'
              : errors['address']
              ? errors['address']
              : undefined
          }
        />
        <Input
          type="text"
          name="mailParent"
          value={mailParent}
          placeholder="Mail de contact*"
          onChangeText={value => {
            if (!value || value == '') {
              setMailParent(undefined);
            } else {
              setMailParent(value);
            }
          }}
          icon={
            <Ionicons
              name={'mail-outline'}
              size={23}
              color={'rgba(153,178,208,0.7)'}
            />
          }
          iconPosition="right"
          error={
            mailParent === undefined
              ? 'Ce champ est obligatoire'
              : errors['mailParent']
              ? errors['mailParent']
              : undefined
          }
        />
        <Input
          type="text"
          name="numberParent"
          value={numberParent}
          placeholder="Numéro de contact*"
          onChangeText={value => {
            if (!value || value == '') {
              setNumberParent(undefined);
            } else {
              setNumberParent(value);
            }
          }}
          icon={
            <Ionicons
              name={'call-outline'}
              size={23}
              color={'rgba(153,178,208,0.7)'}
            />
          }
          iconPosition="right"
          error={
            numberParent === undefined
              ? 'Ce champ est obligatoire'
              : errors['numberParent']
              ? errors['numberParent']
              : undefined
          }
        />
        <RadioButtonContainer
          options={Object.keys(SECTIONS)}
          selected={selectedSection}
          setSelected={setSelectedSection}
        />

        <CustomButton
          onPress={handleSubmit}
          primary
          title="Modifier l'animé !"
        />
      </View>
    </Container>
  );
};

export default UpdateAnimeComponent;
