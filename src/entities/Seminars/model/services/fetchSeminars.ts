import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import {
   getSeminarsLimit,
   getSeminarsNum,
} from '../selectors/seminarSelectors';
import type { Seminar } from '../types/seminar';

export const fetchSeminars = createAsyncThunk<
   Seminar[],
   void,
   ThunkConfig<string>
>('seminarsPage/fetchSeminars', async (_, thunkApi) => {
   const { extra, rejectWithValue, getState } = thunkApi;
   const limit = getSeminarsLimit(getState());
   const page = getSeminarsNum(getState());

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
