import * as axios from 'axios/index';

const API_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchTasks = (token) => {
  const headers = {Authorization: `Bearer ${token}`};
  return axios.get(`${API_URL}/list`, {headers});
};

export const createTask = (token, body) => {
  const headers = {Authorization: `Bearer ${token}`};
  return axios.post(`${API_URL}/list`, body, {headers});
};

export const deleteTask = (token, id) => {
  const headers = {Authorization: `Bearer ${token}`};
  return axios.delete(`${API_URL}/list/${id}`, {headers});
};

export const updateTask = (token, id, body) => {
  const headers = {Authorization: `Bearer ${token}`};
  return axios.patch(`${API_URL}/list/${id}`, body, {headers});
};
