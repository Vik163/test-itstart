import { useCallback, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import cls from './SeminarsPage.module.scss';
import { SeminarsInfiniteList } from '../SeminarsInfiniteList/SeminarsInfiniteList';
import { fetchSeminars, fetchNextSeminarsPage } from '@/entities/Seminars';

interface SeminarsPageProps {
   className?: string;
}

export const SeminarsPage = (props: SeminarsPageProps) => {
   const { className } = props;
   const dispatch = useAppDispatch();

   // первоначальный запрос
   useEffect(() => {
      dispatch(fetchSeminars());
   });

   // пагинация useInfiniteScroll
   const onLoadNextPart = useCallback(() => {
      dispatch(fetchNextSeminarsPage());
   }, [dispatch]);

   return (
      <Page
         onScrollEnd={onLoadNextPart}
         className={classNames(cls.SeminarsPage, {}, [className])}
      >
         <h1 className={cls.title}>СЕМИНАРЫ</h1>

         <SeminarsInfiniteList />
      </Page>
   );
};
