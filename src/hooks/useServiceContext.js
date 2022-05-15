import React, { useContext } from 'react';
import { ServiceContext } from '../context';

export const useServiceContext = () => {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error(
      'useServiceContext must be used within a ServiceContextProvider'
    );
  }

  return context;
};
