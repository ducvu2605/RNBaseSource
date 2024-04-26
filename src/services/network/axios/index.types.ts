import {
  AxiosHeaders,
  HeadersDefaults,
  Method,
  RawAxiosRequestHeaders,
} from 'axios';

export interface ConfigRequest {
  url: string;
  method: Method;
  params?: any;
  data?: any;
}

export type HEADER_TYPE =
  | RawAxiosRequestHeaders
  | AxiosHeaders
  | Partial<HeadersDefaults>;
