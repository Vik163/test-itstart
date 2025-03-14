import { memo, MutableRefObject, ReactNode, useRef } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
   className?: string;
   children: ReactNode;
   onScrollEnd?: () => void;
}

// компонент обертка
export const Page = memo((props: PageProps) => {
   const { className, children, onScrollEnd } = props;
   const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
   const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

   useInfiniteScroll({
      triggerRef,
      wrapperRef: undefined,
      callback: onScrollEnd,
   });

   return (
      <section
         ref={wrapperRef}
         className={classNames(cls.PageRedesigned, {}, [className])}
      >
         {children}
         {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
      </section>
   );
});
