import { HTMLAttributeAnchorTarget, memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SeminarsListItem.module.scss';
import { FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import type { Seminar } from '../../model/types/seminar';
import { Icon } from '@/shared/ui/Icon';
import basket from '@/shared/assets/icons/basket.svg';
import editor from '@/shared/assets/icons/edit-button.svg';
import calendar from '@/shared/assets/icons/calendar-20-20.svg';
import clock from '@/shared/assets/icons/clock.svg';
import { Modal } from '@/shared/ui/Modal';
import { ModalFormBasket } from '@/features/ModalFormBasket';

export interface SeminarsListItemProps {
   className?: string;
   seminar: Seminar;
   target?: HTMLAttributeAnchorTarget;
}

export const SeminarsListItem = memo((props: SeminarsListItemProps) => {
   const { className, seminar } = props;
   const [openBasket, setOpenBasket] = useState(false);

   function closeBasket() {
      setOpenBasket(false);
   }

   return (
      <Card className={classNames(cls.SeminarsListItem, {}, [className])}>
         <AppImage
            fallback={<Skeleton width="100%" height={200} />}
            alt={seminar.title}
            src={seminar.photo}
            className={cls.img}
         />
         <VStack className={cls.info} justify="between">
            <VStack>
               <Text
                  title={HeaderTagType.H_2}
                  fontSize={FontSize.SIZE_17}
                  fontWeight={FontWeight.TEXT_700}
                  className={cls.title}
               >
                  {seminar.title}
               </Text>
               <Text
                  fontSize={FontSize.SIZE_14}
                  fontWeight={FontWeight.TEXT_500}
                  className={cls.description}
               >
                  {seminar.description}
               </Text>
            </VStack>
            <HStack className={cls.footer} justify="between" max>
               <Text fontWeight={FontWeight.TEXT_700} className={cls.date}>
                  <Icon
                     width={15}
                     height={15}
                     className={cls.iconInfo}
                     Svg={calendar}
                  />
                  {seminar.date}
               </Text>
               <Text fontWeight={FontWeight.TEXT_700} className={cls.date}>
                  <Icon
                     width={15}
                     height={15}
                     className={cls.iconInfo}
                     Svg={clock}
                  />
                  {seminar.time}
               </Text>
            </HStack>
            <VStack className={cls.editContainer} align="center" gap="24">
               <Icon
                  clickable
                  onClick={() => setOpenBasket(true)}
                  Svg={basket}
               />
               <Icon className={cls.iconEdit} Svg={editor} />
            </VStack>
         </VStack>
         <Modal
            isOpen={openBasket}
            onClose={closeBasket}
            lazy
            className={cls.modalBasket}
         >
            <ModalFormBasket />
         </Modal>
      </Card>
   );
});
