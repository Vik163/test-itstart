export type { Seminar } from './model/types/seminar';
export type { SeminarsSchema } from './model/types/seminarSchema';

export {
   getSeminarsError,
   getSeminarsHasMore,
   getSeminarsInited,
   getSeminarsIsLoading,
   getSeminarsLimit,
   getSeminarsNum,
} from './model/selectors/seminarSelectors';

export {
   getSeminars,
   seminarsActions,
   seminarsReducer,
} from './model/slices/seminarSlice';

export { fetchNextSeminarsPage } from './model/services/fetchNextSeminarsPage';
export { fetchSeminars } from './model/services/fetchSeminars';

export { SeminarsList } from './ui/SeminarsList/SeminarsList';
export { SeminarsListItem } from './ui/SeminarsListItem/ui/SeminarsListItem/SeminarsListItem';
