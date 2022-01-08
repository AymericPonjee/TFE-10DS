import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({
  authenticated: false,
  user: {},
  setAuthenticated: () => {},
  setUser: () => {},
});

const GlobalProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  return (
    <GlobalContext.Provider
      value={{ authenticated, user, setAuthenticated, setUser }}>
        {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
