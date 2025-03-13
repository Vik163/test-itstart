import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';
import { SeminarsList } from '@/entities/Seminars/ui/SeminarsList/SeminarsList';
import {
   getSeminarsPageError,
   getSeminarsPageIsLoading,
} from '../../model/selectors/seminarPageSelectors';
import { getSeminars } from '../../model/slices/seminarPageSlice';

export const SeminarsInfiniteList = () => {
   const seminars = useSelector(getSeminars.selectAll);
   const isLoading = useSelector(getSeminarsPageIsLoading);
   const error = useSelector(getSeminarsPageError);

   if (error) {
      return <Text>Ошибка при загрузке статей</Text>;
   }

   return <SeminarsList isLoading={isLoading} seminars={seminars} />;
};
