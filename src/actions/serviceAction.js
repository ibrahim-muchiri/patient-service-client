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
    console.log('The contribution details: ', data);
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

export const addService = async (dispatch, servicePayload) => {
  const { amount, amountPaid, dateDeposited, userId } = userPayload;

  try {
    dispatch({ type: ADD_SERVICE_REQUEST });

    const { data } = await axios.post(
      `${API_URL}services/`,
      { amount, amountPaid, dateDeposited },
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
