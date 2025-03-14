import { ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';
import { Button } from '../Button';
import { Icon } from '../Icon';
import closeIcon from '@/shared/assets/icons/closeIcon.svg';

interface ModalProps {
   className?: string;
   children?: ReactNode;
   isOpen?: boolean;
   onClose?: () => void;
   // чтобы модалка загружалась не сразу
   lazy?: boolean;
}

const ANIMATION_DELAY = 100;

export const Modal = (props: ModalProps) => {
   const { className, children, isOpen, onClose, lazy } = props;

   const { close, isClosing, isMounted } = useModal({
      animationDelay: ANIMATION_DELAY,
      onClose,
      isOpen,
   });

   // не закрывает модалку по клику на ней
   // const onContentClick = (e: React.MouseEvent) => {
   //     e.stopPropagation();
   // };

   const mods: Mods = {
      [cls.opened]: isOpen,
      [cls.isClosing]: isClosing,
   };

   // если усть флаг lazy и не монтирована, то возвращается Null и модалка не открывается
   if (lazy && !isMounted) {
      return null;
   }

   return (
      <Portal>
         <div className={classNames(cls.Modal, mods, [])}>
            <Overlay onClick={close} className={cls.overlay} />
            {/* <div className={cls.overlay} onClick={closeHandler}> */}
            <div
               className={cls.content}
               // onClick={onContentClick}
            >
               {onClose && (
                  <Button
                     variant="clear"
                     type="button"
                     onClick={close}
                     className={classNames(cls.closeBtn, {}, [className])}
                  >
                     <Icon className={cls.closeIcon} Svg={closeIcon} />
                  </Button>
               )}

               <div className={cls.form}>{children}</div>
            </div>
            {/* </div> */}
         </div>
      </Portal>
   );
};
