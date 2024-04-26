import axios from 'axios';
import {BASE_URL, TIMEOUT} from './index.constant';
import {
  reponseInterceptorFulfilled,
  reponseInterceptorReject,
  requestInterceptorFulfilled,
  requestInterceptorReject,
} from './index.interceptor';
import {ConfigRequest, HEADER_TYPE} from './index.types';

const HEADER: HEADER_TYPE = {
  Accept: 'application/json',
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: HEADER,
  timeout: TIMEOUT,
});

axiosInstance.interceptors.request.use(
  requestInterceptorFulfilled,
  requestInterceptorReject,
  {},
);

axiosInstance.interceptors.response.use(
  reponseInterceptorFulfilled,
  reponseInterceptorReject,
  {},
);

export default axiosInstance;

export const getAxiosMethod = async ({url, method, params}: ConfigRequest) => {
  switch (method) {
    case 'post':
      return await axiosInstance.post(url, params);
    case 'put':
      return await axiosInstance.put(url, params);
    case 'delete':
      return await axiosInstance.delete(url, params);
    default:
      return await axiosInstance.get(url, params);
  }
};

const configRequest = async (config: ConfigRequest) => {
  try {
    console.log('==== Config Request ==== ', config);
    const result = await getAxiosMethod(config);
    return result;
  } catch (error) {
    console.log('==== Config Request Catch ==== ', error);
    return Promise.reject(error);
  }
};

export const fetchRequest = async (args: ConfigRequest) => {
  return await configRequest(args);
};
