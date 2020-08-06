import { request } from 'umi';
import { TableListParams } from './data.d';

export async function getData(params?: TableListParams) {
  return request<{
    data: [];
  }>('/api/user', {
    params,
  });
}

