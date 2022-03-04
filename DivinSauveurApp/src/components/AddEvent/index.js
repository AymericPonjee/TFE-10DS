import React from 'react';
import {View, Text } from 'react-native';

import Container from '../../components/common/Container';
import styles from './styles';

const AddEventComponent = ({ }) => {

  return (
    <Container>
      <View>
        <Text style={styles.title}>
          Veuillez Complèter le formulaire :
        </Text>
      </View>
    </Container>
  );
};

export default AddEventComponent;
