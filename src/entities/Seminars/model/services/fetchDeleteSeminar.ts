import { ThunkConfig } from '@/app/providers/StoreProvider';
import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDeleteSeminar = createAsyncThunk<
   boolean,
   number,
   ThunkConfig<string>
>('seminarsPage/fetchDeleteSeminar', async (id, thunkApi) => {
   const { rejectWithValue } = thunkApi;

   try {
      if (!id) rejectWithValue('карточка не найдена');

      const response = await $api.delete(`/seminars/${id}`);

      if (response.status !== 200)
         return rejectWithValue('карточку удалить не удалось');

      return true;
   } catch (err) {
      return rejectWithValue('карточку удалить не удалось');
   }
});
