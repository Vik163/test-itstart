import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
   getSeminarsPageHasMore,
   getSeminarsPageIsLoading,
   getSeminarsPageNum,
} from '../selectors/seminarPageSelectors';
import { seminarsPageActions } from '../slices/seminarPageSlice';
import { fetchSeminars } from './fetchSeminars';

export const fetchNextSeminarsPage = createAsyncThunk<
   void,
   void,
   ThunkConfig<string>
>('seminarsPage/fetchNextSeminarsPage', async (_, thunkApi) => {
   const { getState, dispatch } = thunkApi;
   const hasMore = getSeminarsPageHasMore(getState());
   const page = getSeminarsPageNum(getState());
   const isLoading = getSeminarsPageIsLoading(getState());

   if (hasMore && !isLoading) {
      dispatch(seminarsPageActions.setPage(page + 1));
      dispatch(fetchSeminars());
   }
});
