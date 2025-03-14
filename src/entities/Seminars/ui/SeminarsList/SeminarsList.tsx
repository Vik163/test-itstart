import { HTMLAttributeAnchorTarget, memo } from 'react';

import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SeminarsList.module.scss';
import { HStack } from '@/shared/ui/Stack';
import type { Seminar } from '../../model/types/seminar';
import { SeminarListItemSkeleton } from '../SeminarsListItem/ui/SeminarsListItemSkeleton/SeminarsListItemSkeleton';
import { SeminarsListItem } from '../SeminarsListItem/ui/SeminarsListItem/SeminarsListItem';

interface SeminarsListProps {
   className?: string;
   seminars: Seminar[];
   isLoading?: boolean;
}

const getSkeletons = () =>
   new Array(6)
      .fill(0)
      .map((item, index) => (
         <SeminarListItemSkeleton className={cls.card} key={index} />
      ));

// карточки или скелетоны
export const SeminarsList = memo((props: SeminarsListProps) => {
   const { seminars, isLoading } = props;

   return (
      <HStack className={cls.SeminarsList} wrap="wrap" gap="32">
         {seminars.map((item) => (
            <SeminarsListItem
               seminar={item}
               key={item.id}
               className={cls.card}
            />
         ))}
         {isLoading && getSkeletons()}
      </HStack>
   );
});
