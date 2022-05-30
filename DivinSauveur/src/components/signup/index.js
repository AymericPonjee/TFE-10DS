import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CustomButton from '../common/CustomButton';
import Container from '../common/Container'
import Input from '../common/Input';
import styles from './styles';
import Message from '../common/Message';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { LOGIN } from '../../constants/routeNames';

const RegisterComponent = ({
  onSubmit, 
  onChange,  
  loading,
  error, 
  errors
}) => {

  const { navigate } = useNavigation();

  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/Logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Veuillez introduire votre :</Text>

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
            error={errors.name || error?.nom_utilisateur?.[0]}
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
            error={errors.firstname || error?.prenom_utilisateur?.[0]}
          />

          <Input
            placeholder="Totem"
            autoCorrect={false}
            icon={
              <Ionicons
                name={'paw-outline'}
                size={22}
                color={'rgba(153,178,208,0.7)'}
                style={styles.InputIcon}
              />
            }
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'totem', value});
            }}
          />

          <Input
            placeholder="quali"
            autoCorrect={false}
            icon={
              <Ionicons
                name={'ios-book-outline'}
                size={22}
                color={'rgba(153,178,208,0.7)'}
                style={styles.InputIcon}
              />
            }
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'quali', value});
            }}
          />

          <Input
            placeholder="Mail*"
            autoCorrect={false}
            keyboardType="email-address"
            icon={
              <Ionicons
                name={'ios-mail-outline'}
                size={22}
                color={'rgba(153,178,208,0.7)'}
                style={styles.InputIcon}
              />
            }
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'mail', value});
            }}
            error={errors.mail || error?.mail_utilisateur?.[0]}
          />

          <CustomButton
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            primary
            title="Je m'inscris !"
          />

          <View>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.retour}>Retour</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}

export default RegisterComponent;