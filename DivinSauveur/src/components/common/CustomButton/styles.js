import { StyleSheet } from 'react-native';
import colors from '../../../assets/themes/Colors';

export default StyleSheet.create({
  wrapper: {
    height: 50,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },

  loaderSection: {
    flexDirection: 'row',
  },

  textInput: {
    flex: 1,
    width: '100%',
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});