/* eslint-disable dot-notation */
/* eslint-disable no-param-reassign */

import axios from 'axios';
import { readToken } from '../utils';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

httpClient.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer: ${readToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// eslint-disable-next-line import/prefer-default-export
export { httpClient };
