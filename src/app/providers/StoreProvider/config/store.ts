import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { $api } from '@/shared/api/api';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { seminarsPageReducer } from '@/pages/SeminarPage/model/slices/seminarPageSlice';

export function createReduxStore(initialState?: StateSchema) {
   // В корневом редьюсере только обязательные
   // ReducersMapObject тип для корневого редьюсера
   const rootReducers: ReducersMapObject<StateSchema> = {
      seminars: seminarsPageReducer,
   };

   const extraArg: ThunkExtraArg = {
      api: $api,
   };

   const store = configureStore({
      reducer: rootReducers,
      devTools: __IS_DEV__,
      preloadedState: initialState,
      // axios
      // добавляем в thunk через extraArgument настройку axios 5_4 2min
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            thunk: {
               extraArgument: extraArg,
            },
         }).concat(),
   });

   return store;
}
// export type AppDispatch = typeof store.dispatch
// снаружи получить dispatch не можем,
// поэтому используем ReturnType<typeof createReduxStore>
// получаем тип самого store и нужно добавить ['dispatch'], чтобы получить его тип
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
