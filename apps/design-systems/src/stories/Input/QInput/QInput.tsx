import React from 'react';
import { QInputStyle } from './QInput.styles';
import Help  from '../../assets/Icons/help-circle.svg'
import Image from 'next/image';

export interface QInputProps {
  placeholder: string;
}

export const QInput = ({ placeholder }: QInputProps) => {
  return (
    <QInputStyle.Container>
      <QInputStyle.Wrapper>
        <QInputStyle.Input type='string' placeholder='' id='order'/>
        <QInputStyle.Label id='order'>{placeholder}</QInputStyle.Label>
        <QInputStyle.QIcon>
          <Image src={Help} alt='Q mark'/>
        </QInputStyle.QIcon>
      </QInputStyle.Wrapper>
    </QInputStyle.Container>
  );
};
