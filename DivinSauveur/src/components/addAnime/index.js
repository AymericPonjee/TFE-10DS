import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import {View, Text, TouchableOpacity} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Container from '../../components/common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../../components/common/Input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const AddAnimeComponent = ({onSubmit, onChange, loading, error, errors}) => {
  const {navigate} = useNavigation();
  const [open, setOpen] = useState(false);
  const [birthday, setBirthday] = useState('');
  const [errorbirthdayDate, setErrorBirthdayDate] = useState(false);
  const [selectedDateInput, setSelectedDateInput] = useState('birthday');


  const handleDate = date => {
    if (selectedDateInput === 'birthday') {
        setBirthday(date);
    } else {
        setErrorBirthdayDate(true);
      }
  };

  return (
    <Container>
      <View>
        <Text style={styles.title}>Veuillez Complèter le formulaire :</Text>
      </View>

      <DateTimePickerModal
        date={new Date()}
        isVisible={open}
        mode="date"
        onConfirm={date => {
          handleDate(date);
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        locale="fr-BE"
      />

      <View style={styles.form}>
        {error?.error && (
          <Message retry danger retryFn={onSubmit} message={error?.error} />
        )}
        <Input
          placeholder="Nom*"
          autoCorrect={false}
          icon={
            <Ionicons
              name={'person-outline'}
              size={22}
              color={'rgba(153,178,208,0.7)'}
              style={styles.InputIcon}
            />
          }
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'name', value});
          }}
          error={errors.name || error?.nom_anime?.[0]}
        />
        <Input
          placeholder="Prénom*"
          autoCorrect={false}
          icon={
            <Ionicons
              name={'person-outline'}
              size={22}
              color={'rgba(153,178,208,0.7)'}
              style={styles.InputIcon}
            />
          }
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'firstname', value});
          }}
          error={errors.firstname || error?.prenom_anime?.[0]}
        />
        <TouchableOpacity
          onPress={() => {
            setSelectedDateInput('birthday');
            setOpen(true);
            setErrorBirthdayDate(false);
          }}>
          <Input
            type="text"
            name="birthday"
            value={
              birthday
                ? new Date(birthday).toLocaleString('fr', {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                  })
                : ''
            }
            placeholder="Date de naissance*"
            pointerEvents="none"
            icon={
              <Ionicons
                name={'calendar-outline'}
                size={23}
                color={'rgba(153,178,208,0.7)'}
              />
            }
            iconPosition="right"
            error={
              errorbirthdayDate == true
                ? 'Date invalide !'
                : errors['birthday']
                ? errors['birthday']
                : undefined
            }
          />
        </TouchableOpacity>
        <Input
          placeholder="Numéro de registre*"
          autoCorrect={false}
          icon={
            <Ionicons
              name={'person-outline'}
              size={22}
              color={'rgba(153,178,208,0.7)'}
              style={styles.InputIcon}
            />
          }
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'firstname', value});
          }}
          error={errors.firstname || error?.prenom_anime?.[0]}
        />
        <Input
          placeholder="Adresse*"
          autoCorrect={false}
          icon={
            <Ionicons
              name={'person-outline'}
              size={22}
              color={'rgba(153,178,208,0.7)'}
              style={styles.InputIcon}
            />
          }
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'address', value});
          }}
          error={errors.address || error?.adresse_anime?.[0]}
        />

        <Input
          placeholder="Mail de contact*"
          autoCorrect={false}
          icon={
            <Ionicons
              name={'person-outline'}
              size={22}
              color={'rgba(153,178,208,0.7)'}
              style={styles.InputIcon}
            />
          }
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'mail', value});
          }}
          error={errors.mail || error?.mail_anime?.[0]}
        />

        <Input
          placeholder="Numéro de contact*"
          autoCorrect={false}
          icon={
            <Ionicons
              name={'person-outline'}
              size={22}
              color={'rgba(153,178,208,0.7)'}
              style={styles.InputIcon}
            />
          }
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'number', value});
          }}
          error={errors.number || error?.number_anime?.[0]}
        />

        <CustomButton
          loading={loading}
          onPress={onSubmit}
          disabled={loading}
          primary
          title="Ajouter l'animé à la liste !"
        />
      </View>
    </Container>
  );
};

export default AddAnimeComponent;
