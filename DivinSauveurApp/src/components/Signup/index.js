import React, { useState }  from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CustomButton from '../common/CustomButton';
import Container from '../common/Container'
import Input from '../common/Input';
import styles from './styles';
import Message from '../common/Message';

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
            icon={<Text>logo</Text>}
            iconPosition="right"
            onChangeText={(value) => {
              onChange({ name: 'NomUtilisateur', value });
            }}
            error={errors.NomUtilisateur || error?.nom_utilisateur?.[0]}
          />

          <Input
            placeholder="Prénom*"
            icon={<Text>logo</Text>}
            iconPosition="right"
            onChangeText={(value) => {
              onChange({ name: 'PrenomUtilisateur', value });
            }}
            error={errors.PrenomUtilisateur || error?.prenom_utilisateur?.[0]}
          />

          <Input
            placeholder="Totem"
            icon={<Text>logo</Text>}
            iconPosition="right"
            onChangeText={(value) => {
              onChange({ name: 'TotemUtilisateur', value });
            }}
          /> 

          <Input
            placeholder="quali"
            icon={<Text>logo</Text>}
            iconPosition="right"
            onChangeText={(value) => {
              onChange({ name: 'QualiUtilisateur', value });
            }}
          />

          <Input
            placeholder="Mail*"
            icon={<Text>logo</Text>}
            iconPosition="right"
            onChangeText={(value) => {
              onChange({ name: 'MailUtilisateur', value });
            }}
            error={errors.MailUtilisateur || error?.mail_utilisateur?.[0]}
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
              <Text style={styles.retour}>
                Retour
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}

export default RegisterComponent;