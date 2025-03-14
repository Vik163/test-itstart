import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Seminar } from '../types/seminar';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { $api } from '@/shared/api/api';

// обновление. Возвращает обновленный элемент или ошибку
export const fetchUpdateSeminar = createAsyncThunk<
   Seminar,
   Seminar,
   ThunkConfig<string>
>('seminarsPage/fetchUpdateSeminar', async (seminar, thunkApi) => {
   const { rejectWithValue } = thunkApi;

   try {
      const response = await $api.put(`/seminars/${seminar.id}`, seminar);

      if (!response.data) return rejectWithValue('Данные не обновились');

      return response.data;
   } catch (e) {
      return rejectWithValue('Данные не обновились');
   }
});
