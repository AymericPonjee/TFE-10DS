import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  imageBg: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    paddingTop: 100,
    color: 'white',
    opacity: 0.8,
    fontWeight: 'bold',
  },
  inputError: {
    color: colors.danger,
  },
  form: {
    paddingTop: 10,
  },
  DatePicker: {
    height: 45,
    borderRadius: 45,
    borderWidth: 0.5,
    flexDirection: 'row',
    paddingHorizontal: 7,
    alignItems: 'center',
    backgroundColor: colors.darkGrey,
    borderWidth: 0,
    marginVertical: 10,
  },
  customcheckBox: {
    fontSize: 16,
    color: 'white',
    opacity: 0.8,
    fontWeight: 'bold',
    marginHorizontal: 5,
    paddingBottom: 5,
  },
  checkBoxContainer: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: colors.darkGrey,
    marginVertical: 10,
  },
  checkBoxContainerError: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: colors.darkGrey,
    marginVertical: 10,
    borderColor: colors.danger,
    borderWidth:0.5
  },
  checkBoxSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  labelCheckBox: {
    marginLeft: 10,
    color: colors.lightGrey,
    fontSize: 16,
  },
  checkBoxView: {
    borderWidth: 1,
    borderColor: colors.lightBlue,
    height: 22,
    width: 22,
    borderRadius: 5,
  },
  checkBox: {
    height: 20,
    width: 20,
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
    padding: 5,
    alignItems: 'center',
    backgroundColor: colors.darkGrey,
    marginVertical: 10,
  },
  textArea: {
    padding: 10,
    height: 250,
    fontSize: 16,
    color: colors.lightGrey,
  },
});
