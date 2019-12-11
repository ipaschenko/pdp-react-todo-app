import * as axios from 'axios/index';
import { BACKEND_URL } from '../config';

export const fetchTasks = (token) => {
  const headers = {Authorization: `Bearer ${token}`};
  return axios.get(`${BACKEND_URL}/list`, {headers});
};

export const createTask = (token, body) => {
  const headers = {Authorization: `Bearer ${token}`};
  return axios.post(`${BACKEND_URL}/list`, body, {headers});
};

export const deleteTask = (token, id) => {
  const headers = {Authorization: `Bearer ${token}`};
  return axios.delete(`${BACKEND_URL}/list/${id}`, {headers});
};

export const updateTask = (token, id, body) => {
  const headers = {Authorization: `Bearer ${token}`};
  return axios.patch(`${BACKEND_URL}/list/${id}`, body, {headers});
}
