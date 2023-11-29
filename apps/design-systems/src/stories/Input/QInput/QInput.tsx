'use client'

import React from 'react';
import { QInputStyle } from './QInput.styles';
import Logo  from '../assets/Icons/Logo-white.svg'
import TwitterIcon  from '../assets/Icons/twitter.svg'
import InstagramIcon  from '../assets/Icons/instagram.svg'
import FacebookIcon  from '../assets/Icons/facebook.svg'
import Image from 'next/image';

type QInputList = {
  title: string,
  items: string[],
};

export interface QInputProps {
  des?: string;
  QInputList?: QInputList[];
}

export const QInput = ({ des, QInputList }: QInputProps) => {
  return (
    <QInputStyle.Container>
      <QInputStyle.Wrapper>
        
      </QInputStyle.Wrapper>
    </QInputStyle.Container>
  );
};
