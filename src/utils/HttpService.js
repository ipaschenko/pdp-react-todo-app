import * as axios from 'axios/index';
import { BASE_URL } from '../constants/base-url';

export const fetchTasks = (token) => {
  const headers = {Authorization: `Bearer ${token}`};
  return axios.get(`${BASE_URL}/list`, {headers});
};

export const createTask = (token, body) => {
  const headers = {Authorization: `Bearer ${token}`};
  return axios.post(`${BASE_URL}/list`, body, {headers});
};

export const deleteTask = (token, id) => {
  const headers = {Authorization: `Bearer ${token}`};
  return axios.delete(`${BASE_URL}/list/${id}`, {headers});
};

export const updateTask = (token, id, body) => {
  const headers = {Authorization: `Bearer ${token}`};
  return axios.patch(`${BASE_URL}/list/${id}`, body, {headers});
}
