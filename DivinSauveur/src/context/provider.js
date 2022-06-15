import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({
  authenticated: false,
  user: {},
  accessToken: {},
  setAuthenticated: () => {},
  setUser: () => {},
  setAccessToken: () => {},
});

const GlobalProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [accessToken, setAccessToken] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        authenticated,
        user,
        accessToken,
        setAuthenticated,
        setUser,
        setAccessToken,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
