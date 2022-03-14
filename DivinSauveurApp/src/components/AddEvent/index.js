import React, {useState} from 'react';

import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Input from '../../components/common/Input';
import Container from '../../components/common/Container';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import colors from '../../assets/themes/colors';

const AddEventComponent = ({}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <View>
        <Text style={styles.title}>Veuillez Complèter le formulaire :</Text>
      </View>

      <DatePicker
        modal
        mode="datetime"
        open={open}
        date={date}
        //onDateChange={setDate}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        confirmText="Confirmer"
        cancelText="Annuler"
        title="sélectionnez une date"
        locale="fr"
      />

      <View style={styles.form}>
        <Input
          placeholder="Nom de l'évènement*"
          icon={
            <Ionicons
              name={'md-create-outline'}
              size={23}
              color={'rgba(153,178,208,0.7)'}
            />
          }
          iconPosition="right"
        />
        <Input
          placeholder="Adresse de l'évènement*"
          icon={
            <Ionicons
              name={'ios-location-outline'}
              size={23}
              color={'rgba(153,178,208,0.7)'}
            />
          }
          iconPosition="right"
        />
        <TouchableOpacity
          style={styles.DatePicker}
          onPress={() => setOpen(true)}>
          <Ionicons
            name="calendar-outline"
            size={23}
            color={'rgba(153, 178, 208, 0.7)'}
          />
          <Text style={styles.CustomText}>Début de l'évènement*</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.DatePicker}
          onPress={() => setOpen(true)}>
          <Ionicons
            name="calendar-outline"
            size={23}
            color={'rgba(153, 178, 208, 0.7)'}
          />
          <Text style={styles.CustomText}>Fin de l'évènement*</Text>
        </TouchableOpacity>

        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            placeholder="Commentaires ou remarques sur l'évènement"
            placeholderTextColor={colors.lightBlue}
            numberOfLines={20}
            multiline={true}
            icon={
              <Ionicons
                name={'chatbox-outline'}
                size={23}
                color={'rgba(153,178,208,0.7)'}
              />
            }
            iconPosition="right"
          />
        </View>

        <CustomButton
          //onPress={onSubmit}
          primary
          title="Ajouter l'évènement à la liste"
        />
      </View>
    </Container>
  );
};

export default AddEventComponent;
