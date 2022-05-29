import React, { createContext, useReducer } from 'react';
import {
  servicesInitialState,
  ServiceListReducer,
  getServiceDetailReducer,
  deleteServiceReducer,
  addServiceReducer,
  ADD_INI_STATE,
  editServiceDetails,
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
  const [editService, editServiceDispatch] = useReducer(editServiceDetails, {});
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
        editService,
      }}
    >
      <ServiceDispatch.Provider
        value={{
          serviceDispatch,
          serviceDetailDispatch,
          deleteDispatch,
          addServiceDispatch,
          editServiceDispatch,
        }}
      >
        {children}
      </ServiceDispatch.Provider>
    </ServiceContext.Provider>
  );
};
