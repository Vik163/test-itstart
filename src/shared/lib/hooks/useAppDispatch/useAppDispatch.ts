import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/providers/StoreProvider';

// доработал dispatch (кастомный с добавлением типов)
export const useAppDispatch = () => useDispatch<AppDispatch>();
