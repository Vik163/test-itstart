import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
   getSeminarsHasMore,
   getSeminarsIsLoading,
   getSeminarsNum,
} from '../selectors/seminarSelectors';
import { seminarsActions } from '../slices/seminarSlice';
import { fetchSeminars } from './fetchSeminars';

// Пагинация - добавление номера страницы и последующий запрос
export const fetchNextSeminarsPage = createAsyncThunk<
   void,
   void,
   ThunkConfig<string>
>('seminarsPage/fetchNextSeminarsPage', async (_, thunkApi) => {
   const { getState, dispatch } = thunkApi;
   const hasMore = getSeminarsHasMore(getState());
   const page = getSeminarsNum(getState());
   const isLoading = getSeminarsIsLoading(getState());

   if (hasMore && !isLoading) {
      dispatch(seminarsActions.setPage(page + 1));
      dispatch(fetchSeminars());
   }
});
