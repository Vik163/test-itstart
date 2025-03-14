import {
   createEntityAdapter,
   createSlice,
   PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import type { SeminarsSchema } from '../types/seminarSchema';
import type { Seminar } from '../types/seminar';
import { fetchDeleteSeminar } from '../services/fetchDeleteSeminar';
import { fetchUpdateSeminar } from '../services/fetchUpdateSeminar';
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
const semianarsSlice = createSlice({
   name: 'seminarsSlice',
   initialState: seminarsAdapter.getInitialState<SeminarsSchema>({
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
         .addCase(fetchSeminars.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(
            fetchSeminars.fulfilled,
            (state, { payload }: PayloadAction<Seminar[]>) => {
               state.isLoading = false;
               state.hasMore = payload.length >= state.limit;
               seminarsAdapter.addMany(state, payload);
            },
         )
         .addCase(
            fetchSeminars.rejected,
            (state, { payload }: PayloadAction<string | undefined>) => {
               state.isLoading = false;
               state.error = payload;
            },
         )
         .addCase(fetchDeleteSeminar.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(fetchDeleteSeminar.fulfilled, (state) => {
            state.isLoading = false;
            seminarsAdapter.removeAll(state);
         })
         .addCase(
            fetchDeleteSeminar.rejected,
            (state, { payload }: PayloadAction<string | undefined>) => {
               state.isLoading = false;
               state.error = payload;
            },
         )
         .addCase(fetchUpdateSeminar.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(
            fetchUpdateSeminar.fulfilled,
            (state, { payload }: PayloadAction<Seminar>) => {
               state.isLoading = false;
               seminarsAdapter.setOne(state, payload);
            },
         )
         .addCase(
            fetchUpdateSeminar.rejected,
            (state, { payload }: PayloadAction<string | undefined>) => {
               state.isLoading = false;
               state.error = payload;
            },
         );
   },
});

export const { reducer: seminarsReducer, actions: seminarsActions } =
   semianarsSlice;
