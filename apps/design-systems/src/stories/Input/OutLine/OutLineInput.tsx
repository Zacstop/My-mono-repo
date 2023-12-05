'use client'

import React from 'react';
import { OutlineInputStyle } from './OutlineInput.styles';
import Logo  from '../assets/Icons/Logo-white.svg'
import Image from 'next/image';

export interface OutlineInputProps {
  placeholder: string;
}

export const OutlineInput = ({ placeholder }: OutlineInputProps) => {
  return (
    <OutlineInputStyle.Container>
    <OutlineInputStyle.Wrapper>
      <OutlineInputStyle.Input type='email' placeholder='' id='outline'/>
      <OutlineInputStyle.Label id='outline'>{placeholder}</OutlineInputStyle.Label>
    </OutlineInputStyle.Wrapper>
  </OutlineInputStyle.Container>
  );
};
