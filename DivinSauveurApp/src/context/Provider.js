import React, { createContext, useReducer } from 'react';
import authInitialState from './initialStates/authState';
import profilsInitialState from './initialStates/profilsInitialState';
import auth from './reducers/auth';
import profils from './reducers/profils';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [profilsState, profilsDispatch] = useReducer(profils, profilsInitialState);

  return (
    <GlobalContext.Provider
      value={{ authState, profilsState, authDispatch, profilsDispatch }}>
        {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
