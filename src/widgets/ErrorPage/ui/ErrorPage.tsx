import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
   className?: string;
   errorMessage?: string;
}

export const ErrorPage = ({ className, errorMessage }: ErrorPageProps) => {
   // принудительно перезагружает страницу
   const reloadPage = () => {
      location.reload();
   };

   return (
      <div className={classNames(cls.ErrorPage, {}, [className])}>
         <p className={cls.message}>
            {errorMessage ? errorMessage : 'Произошла непредвиденная ошибка'}
         </p>
         <Button className={cls.resetBtn} onClick={reloadPage}>
            Обновить страницу
         </Button>
      </div>
   );
};
