import React from 'react';
import { AuthStateContext } from 'context';

export const useAuthState = () => {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a UserContextProvider');
  }

  return context;
};
