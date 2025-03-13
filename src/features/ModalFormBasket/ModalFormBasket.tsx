import { Icon } from '@/shared/ui/Icon';
import cls from './ModalFormBasket.module.scss';
import closeIcon from '@/shared/assets/icons/closeIcon.svg';

export const ModalFormBasket = () => {
   return (
      <div className={cls.container}>
         <Icon clickable onClick={close} Svg={closeIcon} />
      </div>
   );
};
