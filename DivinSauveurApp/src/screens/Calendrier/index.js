import { useNavigation } from '@react-navigation/core';
import React from 'react';

import { Text, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container';


const Calendrier = () => {
  const { setOptions, toggleDrawer } = useNavigation();

  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Text style={{padding:10}}>NAV</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Container>
      <Text>calendrier</Text>
    </Container>
  )
};

export default Calendrier;