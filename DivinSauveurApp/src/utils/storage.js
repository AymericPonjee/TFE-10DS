import AsyncStorage from '@react-native-async-storage/async-storage';

//Permet de stocker quelque chose à un endroit donner (comme un dictionnaire) grace à une clé-valeur.
export const storeData = async (key, value) => {
  try {
    const json = JSON.stringify(value);
    await AsyncStorage.setItem(key, json);
  } catch (error) {}
};

//Inverse de storeData, retrouve l'endroit où la donnée est stocker grâce à une clé.
export const retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(stringValue);
    }
  } catch (error) {}
};

//Retourne la valeur, grâce à une clé donné et la supprime.
export const deleteData = async key => {
  try {
    return await AsyncStorage.removeItem(key);
    // const stringValue = await AsyncStorage.removeItem(key);
    // return stringValue != null ? JSON.parse(stringValue) : null;
  } catch (error) {}
};

//supprime toutes les clé dans le local storage
export const clearData = async () => {
  try {
    AsyncStorage.clear();
  } catch (error) {}
};
