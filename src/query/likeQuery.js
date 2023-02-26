import { userApi } from '../apis/apiInstance';

import { useMutation, useQuery, useQueryClient } from 'react-query';

const getLikeData = async () => {
  const data = await userApi.get(
    `${process.env.REACT_APP_API_ENDPOINT}/api/products/dibs`
  );
  return data;
};
const PutLikeData = async (id) => {
  await userApi.put(
    `${process.env.REACT_APP_API_ENDPOINT}/api/products/${id}/dibs`
  );
};
// ------------------------------------------------------------------------
export const useGetLikeQuery = () => {
  const { data } = useQuery({
    queryKey: ['getLikeData'],
    queryFn: getLikeData,
  });
  return { data };
};

export const usePutLikeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PutLikeData,
    onSuccess: () => {
      queryClient.invalidateQueries('getLikeData');
    },
  });
};
