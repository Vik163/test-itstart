import {
   createEntityAdapter,
   createSlice,
   PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import type { SeminarsPageSchema } from '../types/seminarPageSchema';
import type { Seminar } from '@/entities/Seminars';
import { fetchSeminars } from '../services/fetchSeminars';

const seminarsAdapter = createEntityAdapter({
   selectId: (seminar: Seminar) => seminar.id.toString(),
});

// селекторы
export const getSeminars = seminarsAdapter.getSelectors<StateSchema>(
   // возвращает нужную часть стейта или дефолтный стейт
   (state) => state.seminars || seminarsAdapter.getInitialState(),
);

// Нормализация данных

const semianarsPageSlice = createSlice({
   name: 'seminarsPageSlice',
   initialState: seminarsAdapter.getInitialState<SeminarsPageSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
      page: 1,
      hasMore: true,
      _inited: false,
      limit: 6,
   }),
   reducers: {
      setPage: (state, action: PayloadAction<number>) => {
         state.page = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchSeminars.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;
            // if (action.meta.arg.replace) {
            //    seminarsAdapter.removeAll(state);
            // }
         })
         .addCase(
            fetchSeminars.fulfilled,
            (
               state,
               // action: PayloadAction<Article[]>,
               action,
            ) => {
               state.isLoading = false;
               state.hasMore = action.payload.length >= state.limit;
               // // 9_3 27min
               // if (action.meta.arg.replace) {
               //    seminarsAdapter.setAll(state, action.payload);
               // } else {
               seminarsAdapter.addMany(state, action.payload);
            },
         )
         .addCase(fetchSeminars.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});

export const { reducer: seminarsPageReducer, actions: seminarsPageActions } =
   semianarsPageSlice;
