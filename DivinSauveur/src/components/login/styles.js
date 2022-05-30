import { StyleSheet } from 'react-native';
import colors from '../../assets/themes/Colors';

export default StyleSheet.create({
  logoImage: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginTop: 50,
  },

  title: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    color: 'white',
    opacity: 0.8,
    fontWeight: 'bold',
  },

  form: {
    paddingTop: 20,
  },

  createAccount: {
    textDecorationLine: 'underline',
    fontSize: 16,
    color: colors.white,
    marginTop: 10,
  },
  InputIcon:{
    paddingLeft: 5
  }
});