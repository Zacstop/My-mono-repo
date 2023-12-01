'use client'

import React from 'react';
import { OutlineInputStyle } from './OutlineInput.styles';
import Logo  from '../assets/Icons/Logo-white.svg'
import Image from 'next/image';


type OutlineInputList = {
  title: string,
  items: string[],
};

export interface OutlineInputProps {
  des?: string;
  OutlineInputList?: OutlineInputList[];
}

export const OutlineInput = ({ des, OutlineInputList }: OutlineInputProps) => {
  return (
    <OutlineInputStyle.Container>
      <OutlineInputStyle.Wrapper>
        OutlineInput
      </OutlineInputStyle.Wrapper>
    </OutlineInputStyle.Container>
  );
};
