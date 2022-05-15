import React, { createContext, useReducer } from 'react';
import {
  servicesInitialState,
  ServiceListReducer,
  getServiceDetailReducer,
  deleteServiceReducer,
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
  const [deleteMsg, deleteDispatch] = useReducer(deleteServiceReducer, {});
  // const [addService, addServiceDispatch] = useReducer(
  //   addService,
  //   ADD_INI_STATE
  // );

  return (
    <ServiceContext.Provider value={{ services, serviceDetails, deleteMsg }}>
      <ServiceDispatch.Provider
        value={{ serviceDispatch, serviceDetailDispatch, deleteDispatch }}
      >
        {children}
      </ServiceDispatch.Provider>
    </ServiceContext.Provider>
  );
};
