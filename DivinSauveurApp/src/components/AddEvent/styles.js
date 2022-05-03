import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  imageBg:{
    flex:1
  },
  title: {
    fontSize: 16,
    paddingTop: 100,
    color: 'white',
    opacity: 0.8,
    fontWeight: 'bold',
  },
  form: {
    paddingTop: 10,
  },
  DatePicker: {
    height: 45,
    borderRadius: 45,
    borderWidth: 0.5,
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    backgroundColor: colors.darkGrey,
    borderWidth: 0,
    marginVertical: 10,
  },
  customcheckBox: {
    color: colors.lightGrey,
    opacity: 0.5,
    fontSize: 16,
    marginHorizontal: 5,
    paddingBottom:5
  },
  checkBoxContainer: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: colors.darkGrey,
    marginVertical: 10,
  },
  CustomText: {
    color: colors.lightGrey,
    opacity: 0.5,
    fontSize: 16,
    marginHorizontal: 5,
  },
  textAreaContainer: {
    borderRadius: 20,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: colors.darkGrey,
    marginVertical: 10,
  },
  textArea: {
    height: 250,
    fontSize: 16,
    color: colors.lightGrey,
  },
});
