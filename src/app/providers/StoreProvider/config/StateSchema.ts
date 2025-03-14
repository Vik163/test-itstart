import { AxiosInstance } from 'axios';
import type { SeminarsSchema } from '@/entities/Seminars';

export interface StateSchema {
   seminars: SeminarsSchema;
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
