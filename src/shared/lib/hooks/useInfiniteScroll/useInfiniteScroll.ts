import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollOptions {
   callback?: () => void;
   triggerRef: MutableRefObject<HTMLElement>;
   wrapperRef?: MutableRefObject<HTMLElement>;
}

// Бесконечный скролл на IntersectionObserver
// https://misha.agency/javascript/intersection-observer-api.html
export function useInfiniteScroll({
   callback,
   wrapperRef,
   triggerRef,
}: UseInfiniteScrollOptions) {
   const observer = useRef<IntersectionObserver | null>(null);

   useEffect(() => {
      const wrapperElement = wrapperRef?.current || null;
      const triggerElement = triggerRef.current;

      if (callback) {
         const options = {
            root: wrapperElement,
            rootMargin: '0px',
            threshold: 1.0,
         };

         observer.current = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
               callback();
            }
         }, options);

         observer.current.observe(triggerElement);
      }

      return () => {
         if (observer.current && triggerElement) {
            observer.current.unobserve(triggerElement);
         }
      };
   }, [callback, triggerRef, wrapperRef]);
}
