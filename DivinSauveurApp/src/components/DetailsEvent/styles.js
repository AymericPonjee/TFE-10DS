import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  sectionTitre: {
    marginTop: 100,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 20,
    borderColor: colors.lightBlue,
    borderWidth: 2,
  },
  titre: {
    fontSize: 20,
    paddingBottom: 10,
    color: 'white',
    opacity: 0.8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lieu: {},
  date: {},

  sectionDescription: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 20,
    borderColor: colors.lightBlue,
    borderWidth: 2,
  },
  sousTitre: {
    fontSize: 16,
    paddingBottom: 10,
    color: 'white',
    opacity: 0.8,
    fontWeight: 'bold',
  },
  text: {},

  sectionPresence: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 20,
    borderColor: colors.lightBlue,
    borderWidth: 2,
  },
  buttonSection: {
    justifyContent: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
    backgroundColor: colors.darkBlue,
    flexDirection: 'row',
  },
  textSection: {
    color: colors.lightGrey,
    fontWeight: 'bold',
  },

  sectionModif: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 20,
    borderColor: colors.lightBlue,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonModif: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: colors.lightBlue,
    flexDirection: 'row',
  },
  modif: {
    padding: 5,
    color: colors.darkBlue,
  },
  buttonSupp: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: colors.darkBlue,
    flexDirection: 'row',
  },
  supp: {
    padding: 5,
    color: colors.danger,
  },
});
