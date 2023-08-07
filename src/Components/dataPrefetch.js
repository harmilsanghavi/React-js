// dataPrefetch.js
import { fetchData } from './fetchData';
import { startLoading, dataFetched } from '../store/prefetchSlice';

export const dataPrefetch = () => async (dispatch) => {
  dispatch(startLoading());
  const data = await fetchData();
  dispatch(dataFetched(data));
};
