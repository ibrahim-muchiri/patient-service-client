import React, { createContext, useReducer } from 'react';
import {
  servicesInitialState,
  ServiceListReducer,
} from '../reducers/serviceReducer';

export const ServiceContext = createContext();
export const ServiceDispatch = createContext();

export const ServiceContextProvider = ({ children }) => {
  const [services, serviceDispatch] = useReducer(
    ServiceListReducer,
    servicesInitialState
  );
  // const [getServiceDetail, serviceDetailDispatch] = useReducer(
  //   getServiceDetail,
  //   {}
  // );
  // const [addService, addServiceDispatch] = useReducer(
  //   addService,
  //   ADD_INI_STATE
  // );

  return (
    <ServiceContext.Provider value={{ services }}>
      <ServiceDispatch.Provider value={serviceDispatch}>
        {children}
      </ServiceDispatch.Provider>
    </ServiceContext.Provider>
  );
};
