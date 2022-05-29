import {
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
  SERVICE_LIST_FAIL,
  SERVICE_DETAIL_REQUEST,
  SERVICE_DETAIL_SUCCESS,
  SERVICE_DETAIL_FAIL,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_FAIL,
  DELETE_SERVICE_REQUEST,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAIL,
  EDIT_SERVICE_REQUEST,
  EDIT_SERVICE_SUCCESS,
  EDIT_SERVICE_FAIL,
} from 'constants/serviceConstants';

export const servicesInitialState = {
  services: [],
};
export const ADD_INI_STATE = {
  errorMessage: '',
  loading: false,
};
export const addServiceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SERVICE_REQUEST:
      return {
        loading: true,
      };
    case ADD_SERVICE_SUCCESS:
      return {
        service: action.payload,
        errorMessage: '',
        loading: false,
      };

    case ADD_SERVICE_FAIL:
      return {
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

//delete user details
export const deleteServiceReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SERVICE_REQUEST:
      return {
        loading: true,
      };
    case DELETE_SERVICE_SUCCESS:
      return {
        laoding: false,
        message: action.payload,
      };
    case DELETE_SERVICE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const editServiceDetails = (state = {}, action) => {
  switch (action.type) {
    case EDIT_SERVICE_REQUEST:
      return {
        loading: true,
      };
    case EDIT_SERVICE_SUCCESS:
      return {
        laoding: false,
        userData: action.payload,
      };
    case EDIT_SERVICE_FAIL:
      return {
        laoding: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export const getServiceDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVICE_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SERVICE_DETAIL_SUCCESS:
      return {
        loading: false,
        service: action.payload,
      };
    case SERVICE_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const ServiceListReducer = (state = servicesInitialState, action) => {
  switch (action.type) {
    case SERVICE_LIST_REQUEST:
      return {
        loading: true,
        services: [],
      };
    case SERVICE_LIST_SUCCESS:
      return {
        laoding: false,
        services: action.payload,
      };
    case SERVICE_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
