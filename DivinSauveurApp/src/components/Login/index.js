import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/common/CustomButton';
import Container from '../../components/common/Container'
import Input from '../../components/common/Input';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { REGISTER } from '../../constants/routeNames';
import Message from '../common/Message';


const LoginComponent = ({
  error,
  form,
  justSignedUp,
  onChange,
  loading,
  onSubmit,
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
        <Text style={styles.title}>
          Bienvenue sur l'application de la 10ième unité Divin Sauveur !
        </Text>

        <View style={styles.form}>
          {justSignedUp && (
            <Message
              onDismiss={() => {}}
              success
              message="Le compte a bien été créé"
            />
          )}
          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message="Une erreur est survenue.. Réessayez !"
            />
          )}

          {error?.error && <Message danger onDismiss message={error?.error} />}

          <Input
            placeholder="Mail"
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
            value={form.mail || null}
            onChangeText={value => {
              onChange({name: 'mail', value});
            }}
          />

          <Input
            placeholder="Password"
            autoCorrect={false}
            secureTextEntry={true}
            icon={
              <Ionicons
                name={'ios-lock-closed-outline'}
                size={22}
                color={'rgba(153,178,208,0.7)'}
                style={styles.InputIcon}
              />
            }
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />

          <CustomButton
            disabled={loading}
            onPress={onSubmit}
            loading={loading}
            primary
            title="Connexion"
          />

          <View>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={styles.createAccount}>Se créer un compte</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}

export default LoginComponent;