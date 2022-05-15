import React, { useContext } from 'react';
import { ServiceDispatch } from '../context';

export const useServiceDispatch = () => {
  const context = useContext(ServiceDispatch);
  if (context === undefined) {
    throw new Error(
      'useServiceDispatch must be used within a ServiceContextProvider'
    );
  }
  return context;
};
