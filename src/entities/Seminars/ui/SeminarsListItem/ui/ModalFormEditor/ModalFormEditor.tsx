import { FormEvent, useState } from 'react';
import cls from './ModalFormEditor.module.scss';
import { Button } from '@/shared/ui/Button';
import { FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import type { UpdateData } from '../../../../model/types/updateData';

interface ModalFormEditorProps {
   submit: (data: UpdateData) => void;
}

export const ModalFormEditor = (props: ModalFormEditorProps) => {
   const { submit } = props;
   const [title, setTitle] = useState('');
   const [photo, setPhoto] = useState('');
   const [description, setDescription] = useState('');
   const [date, setDate] = useState('');
   const [time, setTime] = useState('');

   function changeTitle(value: string) {
      setTitle(value);
   }
   function changePhoto(value: string) {
      setPhoto(value);
   }
   function changeDescription(value: string) {
      setDescription(value);
   }
   function changeDate(value: string) {
      setDate(value);
   }
   function changeTime(value: string) {
      setTime(value);
   }

   function onSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();

      const data = {
         title,
         photo,
         description,
         date,
         time,
      };

      submit(data);
   }
   return (
      <div className={cls.container}>
         <Text
            title={HeaderTagType.H_3}
            className={cls.title}
            fontSize={FontSize.SIZE_24}
            fontWeight={FontWeight.TEXT_700}
         >
            Редактировать
         </Text>
         <form onSubmit={(e) => onSubmit(e)}>
            <Input
               className={cls.input}
               onChange={changeTitle}
               placeholder="Название"
            />
            <Input
               className={cls.input}
               onChange={changePhoto}
               placeholder="Ссылка на фотографию"
            />
            <Input
               className={cls.input}
               onChange={changeDescription}
               placeholder="Описание"
            />
            <Input
               className={cls.input}
               onChange={changeDate}
               placeholder="Дата"
            />
            <Input
               className={cls.input}
               onChange={changeTime}
               placeholder="Время"
            />
            <Button
               type="submit"
               className={cls.button}
               variant="outline"
               fullWidth
            >
               Обновить
            </Button>
         </form>
      </div>
   );
};
