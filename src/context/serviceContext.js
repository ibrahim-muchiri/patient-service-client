import React, { createContext, useReducer } from 'react';
import {
  servicesInitialState,
  ServiceListReducer,
  getServiceDetail,
  ADD_INI_STATE,
  addService,
} from '../reducers/serviceReducer';

export const ServiceContext = createContext();
export const ServiceDispatch = createContext();

export const ServiceContextProvider = ({ children }) => {
  const [services, serviceDispatch] = useReducer(
    ServiceListReducer,
    servicesInitialState
  );
  const [getServiceDetail, serviceDetailDispatch] = useReducer(
    getServiceDetail,
    {}
  );
  const [addService, addServiceDispatch] = useReducer(
    addService,
    ADD_INI_STATE
  );

  return (
    <ServiceContext.Provider value={{ services, getServiceDetail, addService }}>
      <ServiceDispatch.Provider
        value={{
          serviceDispatch,
          serviceDetailDispatch,
          addServiceDispatch,
        }}
      >
        {children}
      </ServiceDispatch.Provider>
    </ServiceContext.Provider>
  );
};
