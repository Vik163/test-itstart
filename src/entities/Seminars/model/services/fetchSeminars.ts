import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import {
   getSeminarsLimit,
   getSeminarsNum,
} from '../selectors/seminarSelectors';
import type { Seminar } from '../types/seminar';
import { $api } from '@/shared/api/api';

// запрос на карточки с номером страницы и лимитом (пагинация)
// возвращает добавляемые при каждом новом запросе карточки или ошибку
export const fetchSeminars = createAsyncThunk<
   Seminar[],
   void,
   ThunkConfig<string>
>('seminarsPage/fetchSeminars', async (_, thunkApi) => {
   const { rejectWithValue, getState } = thunkApi;
   const limit = getSeminarsLimit(getState());
   const page = getSeminarsNum(getState());

   try {
      const response = await $api.get<Seminar[]>('/seminars', {
         params: {
            _limit: limit,
            _page: page,
         },
      });

      if (!response.data) {
         return rejectWithValue('Карточки не найдены');
      }

      return response.data;
   } catch (e) {
      return rejectWithValue('Карточки не найдены');
   }
});
