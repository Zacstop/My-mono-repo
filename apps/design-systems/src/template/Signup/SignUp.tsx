'use client'

import React from 'react';
import { SignUpStyle } from './SignUp.styles';
import Link from 'next/link';

export interface SignUpProps {
  title?: string;
}

export const SignUp = ({ title }: SignUpProps) => {
  return (
    <SignUpStyle.Container>
      <SignUpStyle.SignUp>Create an Account.</SignUpStyle.SignUp>
      <SignUpStyle.SignUpInput>
        <SignUpStyle.InputContainer>
          <SignUpStyle.EmailInput placeholder='Email address'>
          </SignUpStyle.EmailInput>
          <SignUpStyle.LoginButton>
            Email me a login link
          </SignUpStyle.LoginButton>
          <SignUpStyle.SignUp>
            New to Sopa
            <SignUpStyle.Creaccount>
              <Link href="/signup">Create an account</Link>
            </SignUpStyle.Creaccount>
          </SignUpStyle.SignUp>
        </SignUpStyle.InputContainer>
      </SignUpStyle.SignUpInput>
    </SignUpStyle.Container>
  );
};
