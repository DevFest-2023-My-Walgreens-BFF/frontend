import { userApi } from '../apis/apiInstance';

import { useQuery } from 'react-query';

const getDetailData = async (params) => {
  const data = await userApi.get(`http://localhost:3001/api/products/${params.queryKey[1]}`);
  return data;
};

// ---------------------------------------------------------------------------------

// query hooks
export const useGetDetailQuery = (medicineId) => {
  const { isSuccess, isError, isLoading, isFetching, data, error } = useQuery({
    queryKey: ['getDetailData', medicineId],
    queryFn: (params) => {
      return getDetailData(params);
    },
  });

  return data;
};
