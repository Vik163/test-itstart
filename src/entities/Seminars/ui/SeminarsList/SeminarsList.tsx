import { HTMLAttributeAnchorTarget, memo } from 'react';

import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SeminarsList.module.scss';
import { HStack } from '@/shared/ui/Stack';
import type { Seminar } from '../SeminarsListItem/model/types/seminar';
import { SeminarListItemSkeleton } from '../SeminarsListItem/ui/SeminarsListItemSkeleton/SeminarsListItemSkeleton';
import { SeminarsListItem } from '../SeminarsListItem/ui/SeminarsListItem/SeminarsListItem';

interface SeminarsListProps {
   className?: string;
   seminars: Seminar[];
   isLoading?: boolean;
   target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = () =>
   new Array(6)
      .fill(0)
      .map((item, index) => (
         <SeminarListItemSkeleton className={cls.card} key={index} />
      ));

export const SeminarsList = memo((props: SeminarsListProps) => {
   const { className, seminars, isLoading, target } = props;

   if (!isLoading && !seminars.length) {
      return (
         <div
            className={classNames(cls.seminarsListError, {}, [
               className,
               cls['small'],
            ])}
         >
            <Text>Семинары не найдены</Text>
         </div>
      );
   }

   return (
      <HStack className={cls.SeminarsList} wrap="wrap" gap="32">
         {seminars.map((item) => (
            <SeminarsListItem
               seminar={item}
               target={target}
               key={item.id}
               className={cls.card}
            />
         ))}
         {isLoading && getSkeletons()}
      </HStack>
   );
});
