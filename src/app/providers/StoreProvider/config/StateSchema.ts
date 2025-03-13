import { AxiosInstance } from 'axios';
import { SeminarsPageSchema } from '@/pages/SeminarPage/model/types/seminarPageSchema';

export interface StateSchema {
   seminars: SeminarsPageSchema;
}

export interface ThunkExtraArg {
   api: AxiosInstance;
}

// thunkAPI - { rejectValue: string, extra: ThunkExtraArg }
// преобразуем
// дженерик Т - тип ошибки
export interface ThunkConfig<T> {
   rejectValue: T;
   extra: ThunkExtraArg;
   state: StateSchema;
}
