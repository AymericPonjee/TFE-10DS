import {useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';

import {Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import {GlobalContext} from '../../context/Provider';
import {clearData} from '../../utils/storage';

const Calendrier = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Text style={{padding: 10}}>NAV</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  const {setAuthenticated, setUser} = useContext(GlobalContext);

  const handleSubmit = async () => {
    setAuthenticated(false);
    setUser({});
    await clearData();
  };

  return (
    <Container>
      <Text>calendrier</Text>
      <CustomButton title="Déconnexion" onPress={handleSubmit} />
    </Container>
  );
};

export default Calendrier;
