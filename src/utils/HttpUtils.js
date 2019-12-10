import React from 'react';
import * as axios from 'axios';
import { BACKEND_URL } from '../config';
import { useAuth0 } from '../react-auth0-spa';

export const deleteTask = async (id) => {
  const { useAuth0getTokenSilently } = useAuth0();
  const token = await useAuth0getTokenSilently();
  const headers = {Authorization: `Bearer ${token}`};
  try {
    return axios.delete(`${BACKEND_URL}/list/${id}`, {headers})
  } catch(e) {
    throw e;
  }
};
