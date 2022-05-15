import React, { createContext, useReducer } from 'react';
import {
  servicesInitialState,
  ServiceListReducer,
  getServiceDetailReducer,
  deleteServiceReducer,
  addServiceReducer,
  ADD_INI_STATE,
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
  const [addService, addServiceDispatch] = useReducer(
    addServiceReducer,
    ADD_INI_STATE
  );

  return (
    <ServiceContext.Provider
      value={{
        services,
        serviceDetails,
        deleteMsg,
        addService,
      }}
    >
      <ServiceDispatch.Provider
        value={{
          serviceDispatch,
          serviceDetailDispatch,
          deleteDispatch,
          addServiceDispatch,
        }}
      >
        {children}
      </ServiceDispatch.Provider>
    </ServiceContext.Provider>
  );
};
