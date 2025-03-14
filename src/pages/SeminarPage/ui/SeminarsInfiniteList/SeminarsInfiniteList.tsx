import { useSelector } from 'react-redux';

import {
   getSeminars,
   getSeminarsIsLoading,
   SeminarsList,
} from '@/entities/Seminars';

export const SeminarsInfiniteList = () => {
   const seminars = useSelector(getSeminars.selectAll);
   const isLoading = useSelector(getSeminarsIsLoading);

   return <SeminarsList isLoading={isLoading} seminars={seminars} />;
};
