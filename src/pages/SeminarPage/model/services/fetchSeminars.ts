import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import type { Seminar } from '../../../../entities/Seminars/ui/SeminarsListItem/model/types/seminar';
import {
   getSeminarsPageLimit,
   getSeminarsPageNum,
} from '../selectors/seminarPageSelectors';

export const fetchSeminars = createAsyncThunk<
   Seminar[],
   void,
   ThunkConfig<string>
>('seminarsPage/fetchSeminars', async (_, thunkApi) => {
   const { extra, rejectWithValue, getState } = thunkApi;
   const limit = getSeminarsPageLimit(getState());
   const page = getSeminarsPageNum(getState());

   try {
      const response = await extra.api.get<Seminar[]>('/seminars', {
         params: {
            _limit: limit,
            _page: page,
         },
      });

      if (!response.data) {
         throw new Error();
      }

      return response.data;
   } catch (e) {
      return rejectWithValue('error');
   }
});
