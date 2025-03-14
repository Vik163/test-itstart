import { FormEvent } from 'react';
import cls from './ModalFormBasket.module.scss';
import { Button } from '@/shared/ui/Button';
import { FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { useSelector } from 'react-redux';
import { getSeminarsIsLoadingModal } from '../../../../model/selectors/seminarSelectors';

interface ModalFormBasketProps {
   submit: () => void;
}

export const ModalFormBasket = (props: ModalFormBasketProps) => {
   const { submit } = props;
   const isLoadingModal = useSelector(getSeminarsIsLoadingModal);

   function onSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();

      submit();
   }
   return (
      <div className={cls.container}>
         <Text
            title={HeaderTagType.H_3}
            className={cls.title}
            fontSize={FontSize.SIZE_24}
            fontWeight={FontWeight.TEXT_700}
         >
            Вы уверены?
         </Text>
         <form onSubmit={(e) => onSubmit(e)}>
            <Button
               type="submit"
               className={cls.button}
               variant="outline"
               fullWidth
            >
               {isLoadingModal ? 'Удаление...' : 'Удалить'}
            </Button>
         </form>
      </div>
   );
};
