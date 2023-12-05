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
        {/* <div style={{display: 'flex', alignContent: "center", alignItems: 'center', position: "absolute", top: "33%", width: "100%", justifyContent: "space-between", padding: "0px 10px"}}> */}
        <QInputStyle.Label id='order'>{placeholder}</QInputStyle.Label>
        <QInputStyle.QIcon>
          <Image src={Help} alt='Q mark'/>
        </QInputStyle.QIcon>
        {/* </div> */}
      </QInputStyle.Wrapper>
    </QInputStyle.Container>
  );
};
