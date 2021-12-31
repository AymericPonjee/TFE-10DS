import React from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Container from '../../components/common/Container';
import styles from './styles';

const SideMenu = ({  }) => {
  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/Logo.png')}
          style={styles.logoImage}
        />
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;