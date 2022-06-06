import {StyleSheet} from 'react-native';
import Colors from '../../assets/themes/Colors';
import colors from '../../assets/themes/Colors';

export default StyleSheet.create({
  sectionTitre: {
    marginTop: 100,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 20,
    borderColor: colors.lightBlue,
    borderWidth: 2,
    alignItems: 'center',
  },
  img: {
    borderRadius: 10,
  },
  titre: {
    fontSize: 24,
    paddingTop: 15,
    color: 'white',
    opacity: 0.8,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  prix: {
    fontSize: 24,
    paddingVertical: 5,
    color: Colors.darkBlue,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },

  sectionDescription: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 20,
    borderColor: colors.lightBlue,
    borderWidth: 2,
  },
  sousTitre: {
    fontSize: 18,
    paddingBottom: 10,
    color: 'white',
    opacity: 0.8,
    fontWeight: 'bold',
  },
  text: {},
  sectionAjout: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 20,
    borderColor: colors.lightBlue,
    borderWidth: 2,
  },
  buttonAjout: {
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ajout: {
    fontWeight: '400',
    fontSize: 18,
    color: colors.success,
    paddingLeft:5
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
