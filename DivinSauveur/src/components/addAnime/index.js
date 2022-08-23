import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';

import {View, Text} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Container from '../../components/common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../../components/common/Input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import colors from '../../assets/themes/Colors';

import {SECTIONS} from '../../constants/models';
import {RadioButtonContainer} from '../common/RadioButtonContainer';

const AddAnimeComponent = ({
  onSubmit,
  onChange,
  loading,
  error,
  errors,
  selectedSection,
  setSelectedSection
}) => {
  const {navigate} = useNavigation();
  const [open, setOpen] = useState(false);

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
        <Input
          placeholder="Numéro de registre*"
          autoCorrect={false}
          icon={
            <Ionicons
              name={'card-outline'}
              size={22}
              color={'rgba(153,178,208,0.7)'}
              style={styles.InputIcon}
            />
          }
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'nationalNumber', value});
          }}
          error={errors.nationalNumber || error?.nationalNumber_anime?.[0]}
        />
        <Input
          placeholder="Adresse*"
          autoCorrect={false}
          icon={
            <Ionicons
              name={'home-outline'}
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
              name={'mail-outline'}
              size={22}
              color={'rgba(153,178,208,0.7)'}
              style={styles.InputIcon}
            />
          }
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'mailParent', value});
          }}
          error={errors.mailParent || error?.mailParent_anime?.[0]}
        />
        <Input
          placeholder="Numéro de contact*"
          autoCorrect={false}
          icon={
            <Ionicons
              name={'call-outline'}
              size={22}
              color={'rgba(153,178,208,0.7)'}
              style={styles.InputIcon}
            />
          }
          iconPosition="right"
          onChangeText={value => {
            onChange({name: 'numberParent', value});
          }}
          error={errors.numberParent || error?.numberParent_anime?.[0]}
        />

        <RadioButtonContainer
          options={Object.keys(SECTIONS)}
          selected={selectedSection}
          setSelected={setSelectedSection}
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
