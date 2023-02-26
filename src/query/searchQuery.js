import { userApi } from '../apis/apiInstance';

import { useQuery } from 'react-query';

const getSearchData = async (params) => {
  const data = await userApi.get(
    `http://localhost:3001/api/products/medicines?type=${params.queryKey[1]}&value=${params.queryKey[2]}&page=${params.queryKey[3]}&pageSize=${params.queryKey[4]}`
  );
  console.log(data)
  return data;
};

export const useGetSearchQuery = (type, value, page, pageSize) => {
  const { refetch, data } = useQuery({
    queryKey: ['getSearchData', type, value, page, pageSize],
    queryFn: (params) => getSearchData(params),
    enabled: false,
    refetchOnWindowFocus: false,
    onError: () => {
      console.error('Error');
    },
  });
  return { refetch, data };
};
