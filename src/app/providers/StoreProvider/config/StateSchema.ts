import { AxiosInstance } from 'axios';
import type { SeminarsSchema } from '@/entities/Seminars';

export interface StateSchema {
   seminars: SeminarsSchema;
}

export interface ThunkExtraArg {
   api: AxiosInstance;
}

// thunkAPI - { rejectValue: string }
// преобразуем
// дженерик Т - тип ошибки
export interface ThunkConfig<T> {
   rejectValue: T;
   state: StateSchema;
}
