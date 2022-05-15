import React, { createContext, useReducer } from 'react';
import {
  servicesInitialState,
  ServiceListReducer,
  getServiceDetailReducer,
} from '../reducers/serviceReducer';

export const ServiceContext = createContext();
export const ServiceDispatch = createContext();

export const ServiceContextProvider = ({ children }) => {
  const [services, serviceDispatch] = useReducer(
    ServiceListReducer,
    servicesInitialState
  );
  const [serviceDetails, serviceDetailDispatch] = useReducer(
    getServiceDetailReducer,
    {}
  );
  // const [addService, addServiceDispatch] = useReducer(
  //   addService,
  //   ADD_INI_STATE
  // );

  return (
    <ServiceContext.Provider value={{ services, serviceDetails }}>
      <ServiceDispatch.Provider
        value={{ serviceDispatch, serviceDetailDispatch }}
      >
        {children}
      </ServiceDispatch.Provider>
    </ServiceContext.Provider>
  );
};
