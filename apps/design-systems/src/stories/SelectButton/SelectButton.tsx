'use client'

import React from 'react';
import { SelectButtonStyle } from './SelectButton.styles';
import Logo  from '../assets/Icons/Logo-white.svg'
import Image from 'next/image';

export interface SelectButtonProps {
  option?: string[];
}

export const SelectButton = ({ option }: SelectButtonProps) => {
  return (
    <SelectButtonStyle.Container>
      <SelectButtonStyle.Wrapper>
        <SelectButtonStyle.Options>
          <SelectButtonStyle.BtnOne></SelectButtonStyle.BtnOne>
          <SelectButtonStyle.BtnTow></SelectButtonStyle.BtnTow>
        </SelectButtonStyle.Options>
      </SelectButtonStyle.Wrapper>
    </SelectButtonStyle.Container>
  );
};
