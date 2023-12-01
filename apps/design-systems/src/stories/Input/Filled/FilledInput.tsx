'use client'

import React from 'react';
import { FilledInputStyle } from './FilledInput.styles';
import Logo  from '../assets/Icons/Logo-white.svg'
import Image from 'next/image';


type FilledInputList = {
  title: string,
  items: string[],
};

export interface FilledInputProps {
  des?: string;
  FilledInputList?: FilledInputList[];
}

export const FilledInput = ({ des, FilledInputList }: FilledInputProps) => {
  return (
    <FilledInputStyle.Container>
      <FilledInputStyle.Wrapper>
        FilledInput
      </FilledInputStyle.Wrapper>
    </FilledInputStyle.Container>
  );
};
