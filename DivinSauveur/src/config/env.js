import Config from "react-native-config"

const devEnvironmentVariables = {
  BACKEND_URL: Config.REACT_APP_DEV_BACKEND_URL,
};

const prodEnvironmentVariables = {
  BACKEND_URL: Config.REACT_APP_PROD_BACKEND_URL,
}

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;