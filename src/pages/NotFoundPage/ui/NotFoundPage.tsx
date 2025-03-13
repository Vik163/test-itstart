import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
   className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
   return (
      <div
         data-testid="NotFoundPage"
         className={classNames(cls.NotFoundPage, {}, [className])}
      >
         Страница не найдена{' '}
      </div>
   );
};
