'use client'

import React from 'react';
import { SignInStyle } from './SignIn.styles';
import Logo  from '../assets/Icons/Logo-white.svg'
import TwitterIcon  from '../assets/Icons/twitter.svg'
import InstagramIcon  from '../assets/Icons/instagram.svg'
import FacebookIcon  from '../assets/Icons/facebook.svg'
import Image from 'next/image';


// type User = {
//   name: string;
// };

// type MenuList = {
//   name: string;
//   link: string;
// }[];

export interface SignInProps {
  title?: string;
  // menuList?: MenuList;
  // user?: User | null;
  // onLogin?: () => void;
  // onLogout?: () => void;
  // join?: () => void;
  // containerColor?: string;
}

// export const SignIn = ({ title, menuList = [], user, onLogin, onLogout, join, containerColor }: SignInProps) => {
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
            <SignInStyle.Creaccount>Create an account</SignInStyle.Creaccount>
          </SignInStyle.SignUp>
        </SignInStyle.InputContainer>
      </SignInStyle.SignInput>
    </SignInStyle.Container>
  );
};
