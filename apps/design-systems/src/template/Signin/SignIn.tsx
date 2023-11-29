'use client'

import React from 'react';
import { SignInStyle } from './SignIn.styles';
import Link from 'next/link';

export interface SignInProps {
  title?: string;
}

export const SignIn = ({ title }: SignInProps) => {
  return (
    <SignInStyle.Container>
      <SignInStyle.SignIn>Sign in.</SignInStyle.SignIn>
      <SignInStyle.SignInput>
        <SignInStyle.InputContainer>
          <SignInStyle.EmailInput placeholder='Email address'>
          </SignInStyle.EmailInput>
          <SignInStyle.LoginButton>
            Email me a login link
          </SignInStyle.LoginButton>
          <SignInStyle.SignUp>
            New to Sopa
            <SignInStyle.Creaccount>
              <Link href="/signup">Create an account</Link>
            </SignInStyle.Creaccount>
          </SignInStyle.SignUp>
        </SignInStyle.InputContainer>
      </SignInStyle.SignInput>
    </SignInStyle.Container>
  );
};
