import { request } from 'umi';
import { TableListParams } from './data.d';

export async function getData(params?: TableListParams) {
  const { REACT_APP_ENV } = process.env;
  return request<{
    data: [];
  }>(REACT_APP_ENV?'http://101.37.145.31:7001/user':'/api/user', {
    params,
  });
}

