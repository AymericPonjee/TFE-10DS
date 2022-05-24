import React, {useState} from 'react';

import {View, Text, TextInput} from 'react-native';

import Container from '../../components/common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../../components/common/Input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import colors from '../../assets/themes/colors';


const AddItemComponent = () => {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');


  const handleSubmit = () => {
    checkErrors().then(resp => {
      if (Object.keys(resp).length == 0) {
        const event = {
          name: name,
          address: address,
          comment: description,
        };

        return create(event)
          .then(resp => console.log('resp =>', resp))
          .catch(err => console.log('err =>', err.status));
      }
    });
    console.log('errors ->', errors);
  };

  const checkErrors = () => {
    const err = {};
    if (!name || name === '') {
      err['name'] = "Veuillez entrer un nom pour l'objet";
    }
    if (!price || price === '') {
      err['price'] = "Veuillez entrer un prix pour l'objet";
    }
    if (!description || description === '') {
      err['description'] = "Veuillez entrer une description pour l'objet";
    }
    if (!image || image === '') {
      err['image'] = "Veuillez upload une image pour l'objet";
    }

    console.log('err ->', err);
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
          onChangeText={value => {
            if (!value || value == '') {
              setName(undefined);
            } else {
              setName(value);
            }
          }}
          placeholder="Nom de l'objet*"
          icon={
            <Ionicons
              name={'md-create-outline'}
              size={23}
              color={'rgba(153,178,208,0.7)'}
            />
          }
          iconPosition="right"
          error={
            name === undefined
              ? 'Ce champ est obligatoire !'
              : errors['name']
              ? errors['name']
              : undefined
          }
        />
        <Input
          type="Number"
          name="price"
          keyboardType="numeric"
          value={price}
          onChangeText={value => {
            if (!value || value == '') {
              setPrice(undefined);
            } else {
              setPrice(value);
            }
          }}
          placeholder="Prix de l'objet*"
          icon={
            <Ionicons
              name={'ios-location-outline'}
              size={23}
              color={'rgba(153,178,208,0.7)'}
            />
          }
          iconPosition="right"
          error={
            price === undefined
              ? 'Ce champ est obligatoire ! '
              : errors['price']
              ? errors['price']
              : undefined
          }
        />
        <View
          style={
            errors['description'] != undefined
              ? styles.checkBoxContainerError
              : styles.textAreaContainer
          }>
          <TextInput
            type="text"
            name="description"
            onSubmitEditing={() =>
              setErrors({...errors, description: undefined})
            }
            value={description}
            style={styles.textArea}
            placeholder="Description de l'évènement*"
            placeholderTextColor={colors.lightBlue}
            numberOfLines={20}
            multiline={true}
            onChangeText={v => setDescription(v)}
            error={
              description === undefined
                ? 'Ce champ est obligatoire'
                : errors['description']
                ? errors['description']
                : undefined
            }
          />
        </View>
        {errors['description'] != undefined && (
          <Text
            style={{
              color: colors.danger,
              marginTop: -2,
              fontSize: 12,
              paddingBottom: 10,
            }}>
            {errors['description']}
          </Text>
        )}

        <Input
          type="text"
          name="image"
          value={image}
          onChangeText={value => {
            if (!value || value == '') {
              setImage(undefined);
            } else {
              setImage(value);
            }
          }}
          placeholder="image de l'objet*"
          icon={
            <Ionicons
              name={'md-create-outline'}
              size={23}
              color={'rgba(153,178,208,0.7)'}
            />
          }
          iconPosition="right"
          error={
            name === undefined
              ? 'Ce champ est obligatoire !'
              : errors['image']
              ? errors['image']
              : undefined
          }
        />

        <CustomButton
          onPress={handleSubmit}
          primary
          title="Ajouter l'objet à la boutique"
        />
      </View>
    </Container>
  );
};

export default AddItemComponent;
