import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/themes/Colors';
import Container from '../common/Container';
import {CALENDARSTACK, CHAT, SHOPSTACK} from '../../constants/routeNames';
import styles from './styles';

const HomeComponent = ({}) => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <View style={{paddingTop: 100}}>
        <TouchableOpacity
          style={styles.CustomButton}
          onPress={() => navigate(CALENDARSTACK)}>
          <Ionicons
            name="calendar-outline"
            size={28}
            color={colors.lightGrey}
          />
          <Text style={styles.CustomText}>Calendrier</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.CustomButton}
          onPress={() => navigate(SHOPSTACK)}>
          <Ionicons name="card-outline" size={28} color={colors.lightGrey} />
          <Text style={styles.CustomText}>Boutique</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.CustomButton}
          onPress={() => navigate(CHAT)}>
          <Ionicons
            name="chatbubbles-outline"
            size={28}
            color={colors.lightGrey}
          />
          <Text style={styles.CustomText}>Conversation</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default HomeComponent;
