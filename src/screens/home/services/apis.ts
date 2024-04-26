import {fetchRequest} from '../../../services/network/axios';

export const getEmployees = async () => {
  const result = await fetchRequest({
    url: '/v1/employees',
    method: 'GET',
    params: {},
  });

  return result;
};
