import { StyleSheet } from 'react-native';

import colors from '../../../assets/themes/Colors';

export default StyleSheet.create({
  wrapper: {
    height: 45,
    borderRadius: 45,
    borderWidth: 0.5,
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    backgroundColor: colors.darkGrey,
  },

  inputContainer:{
    paddingVertical: 10,
  },

  textInput: {
    flex:1,
    height:'100%',
    color: colors.lightGrey,
    fontSize: 16,
    marginHorizontal: 5,
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  }
});