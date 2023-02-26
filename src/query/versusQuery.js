import { useQuery } from 'react-query';
import { userApi } from '../apis/apiInstance';

const getVersusData = async (params) => {
  const data = await userApi.get(
    `/api/products/compare?compareA=${params.queryKey[1]}&compareB=${params.queryKey[2]}`
  );
  return data;
};

export const useGetVersusQuery = (pillA, pillB) => {
  const { refetch, isLoading, data } = useQuery({
    queryKey: ['getVersusData', pillA, pillB],
    queryFn: (params) => getVersusData(params),
    enabled: false,
    refetchOnWindowFocus: false,
  });

  return { refetch, isLoading, data };
};
