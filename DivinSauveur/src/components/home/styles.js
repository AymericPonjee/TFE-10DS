import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/Colors';

export default StyleSheet.create({
  CustomButton: {
    height: 75,
    marginVertical: 5,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkBlue,
    flexDirection: 'row',
  },
  CustomText: {
    color: colors.lightGrey,
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10
  },
});
