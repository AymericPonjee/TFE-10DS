import 'react-native-gesture-handler';
import React from 'react';

import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/provider';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
