'use client'

import React from 'react';
import { FilledInputStyle } from './FilledInput.styles';
import Logo  from '../assets/Icons/Logo-white.svg'
import Image from 'next/image';

export interface FilledInputProps {
  placeholder?: string;
}

export const FilledInput = ({ placeholder }: FilledInputProps) => {
  return (
    <FilledInputStyle.Container>
    <FilledInputStyle.Wrapper>
      <FilledInputStyle.Input type='number' placeholder='' id='outline'/>
      <FilledInputStyle.Label id='outline'>{placeholder}</FilledInputStyle.Label>
    </FilledInputStyle.Wrapper>
  </FilledInputStyle.Container>
  );
};
