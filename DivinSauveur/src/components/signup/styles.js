import { StyleSheet } from 'react-native';
import colors from '../../assets/themes/Colors';

export default StyleSheet.create({
  logoImage: {
    height: 175,
    width: 175,
    alignSelf: 'center',
    marginTop: 40,
  },

  title: {
    fontSize: 16,
    textAlign: 'left',
    paddingTop: 10,
    color: 'white',
    opacity: 0.8,
    fontWeight: 'bold',
  },

  form: {
    paddingTop: 10,
  },

  retour: {
    textDecorationLine: 'underline',
    fontSize: 16,
    color: colors.white,
    marginTop: 10,
  },
  InputIcon: {
    paddingLeft: 5
  }
});