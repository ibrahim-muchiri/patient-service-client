import axios from 'axios';
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
} from '../constants/serviceConstants';

// const API_URL = 'http://localhost:8000/api/v1/';
const API_URL = 'https://patien-service-app.herokuapp.com/api/v1/';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};
export const getSingleService = async (dispatch, serviceId) => {
  try {
    dispatch({ type: SERVICE_DETAIL_REQUEST });
    const { data } = await axios.get(`${API_URL}services/${serviceId}/`);
    console.log('The service details: ', data);
    if (data) {
      dispatch({ type: SERVICE_DETAIL_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: SERVICE_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const editServiceDetails = async (
  dispatch,
  serviceId,
  servicePayload
) => {
  const { name, price } = servicePayload;
  try {
    dispatch({ type: EDIT_SERVICE_REQUEST });
    const { data } = await axios.patch(
      `${API_URL}services/${serviceId}`,
      { name, price },
      config
    );
    dispatch({ type: EDIT_SERVICE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EDIT_SERVICE_FAIL,
      payload:
        error.response && error.response.adata.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteService = async (dispatch, id) => {
  try {
    dispatch({ type: DELETE_SERVICE_REQUEST });
    const { data } = await axios.delete(`${API_URL}services/${id}`);

    dispatch({ type: DELETE_SERVICE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_SERVICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addService = async (dispatch, servicePayload) => {
  const { name, price } = servicePayload;

  try {
    dispatch({ type: ADD_SERVICE_REQUEST });

    const { data } = await axios.post(
      `${API_URL}services/`,
      { name, price },
      config
    );
    console.log('The data i received from the server: ', data);
    dispatch({ type: ADD_SERVICE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: ADD_SERVICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = async (dispatch, id) => {
  try {
    dispatch({ type: USER_DETAIL_REQUEST });
    const { data } = await axios.get(`${API_URL}patients/${id}`);

    console.log('inside user details action: ', data);

    if (data) {
      dispatch({ type: USER_DETAIL_SUCCESS, payload: data.data });
    }
  } catch (error) {
    dispatch({
      type: USER_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getAllServices = async (dispatch) => {
  try {
    dispatch({ type: SERVICE_LIST_REQUEST });
    const { data } = await axios.get(`${API_URL}services/`);
    dispatch({ type: SERVICE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      SERVICE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
