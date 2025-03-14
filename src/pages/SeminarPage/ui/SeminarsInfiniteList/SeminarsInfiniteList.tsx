import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';

import {
   getSeminars,
   getSeminarsError,
   getSeminarsIsLoading,
   SeminarsList,
} from '@/entities/Seminars';

export const SeminarsInfiniteList = () => {
   const seminars = useSelector(getSeminars.selectAll);
   const isLoading = useSelector(getSeminarsIsLoading);
   const error = useSelector(getSeminarsError);

   if (error) {
      return <Text>Ошибка при загрузке статей</Text>;
   }

   return <SeminarsList isLoading={isLoading} seminars={seminars} />;
};
