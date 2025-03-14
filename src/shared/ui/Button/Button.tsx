import {
   ButtonHTMLAttributes,
   ForwardedRef,
   forwardRef,
   ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   /**
    * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
    */
   variant?: ButtonVariant;
   /**
    * Флаг, отвечающий за работу кнопки
    */
   disabled?: boolean;
   /**
    * Содержимое кнопки
    */
   children?: ReactNode;
   /**
    * Увеличивает кнопку на всю свободную ширину
    */
   fullWidth?: boolean;

   color?: ButtonColor;

   addonLeft?: ReactNode;
   addonRight?: ReactNode;
}

// 16_24 1min ошибка в консоли ref решение  forwardRef
export const Button = forwardRef(
   (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
      const {
         className,
         children,
         variant = 'outline',
         disabled,
         fullWidth,
         addonLeft,
         addonRight,
         color = 'normal',
         ...otherProps
      } = props;

      const mods: Mods = {
         [cls.disabled]: disabled,
         [cls.fullWidth]: fullWidth,
         [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
      };

      return (
         <button
            type="button"
            className={classNames(cls.Button, mods, [
               className,
               cls[variant],
               cls[color],
            ])}
            disabled={disabled}
            {...otherProps}
            ref={ref}
         >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
         </button>
      );
   },
);
