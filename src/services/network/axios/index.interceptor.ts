import {AxiosResponse, InternalAxiosRequestConfig} from 'axios';

export const requestInterceptorFulfilled = (
  request: InternalAxiosRequestConfig<any>,
) => {
  console.log(
    '==== Request Interceptor Fulfilled ==== ',
    `${request.baseURL}${request.url}`,
  );
  // Add logic to
  // 1. accessToken is availiable
  // 2. add to header with Authorization
  // 3. request.headers.Authorization = `Bearer ${accessToken}`;

  return request;
};

export const requestInterceptorReject = (error: any) => {
  // console.log('==== Request Interceptor Reject ==== ', JSON.stringify(error));
  return Promise.reject(error);
};

export const reponseInterceptorFulfilled = (
  response: AxiosResponse<any, any>,
) => {
  // console.log('==== Response Interceptor Fulfilled ==== ', response);
  return response;
};

export const reponseInterceptorReject = (error: any) => {
  console.log('==== Response Interceptor Reject ==== ', {
    status: error.response.status,
    code: error.code,
    message: error.message,
  });

  switch (error.response.status) {
    case 401:
      // Add Logic to
      // 1. Redirect to login page or
      // 2. Request refresh token
      // 3. Replace "break" to "return" in order to re-call api with new token
      // Reference: https://medium.com/@aqeel_ahmad/handling-jwt-access-token-refresh-token-using-axios-in-react-react-native-app-2024-f452c96a83fc

      break;
    case 403:
      break;
    case 404:
      break;
    default:
      break;
  }

  return Promise.reject(error);
};
