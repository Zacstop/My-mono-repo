'use client'

import React from 'react';
import { NavigationBarStyle } from './NavigationBar.styles';
import MainLogo  from '../assets/Icons/Logo.svg'
import User  from '../assets/Icons/user.svg'
import Bag  from '../assets/Icons/shopping-bag.svg'
import Image from 'next/image';
import Link from 'next/link';

// type User = {
//   name: string;
// };

// type MenuList = {
//   name: string;
//   link: string;
// }[];

export interface NavigationBarProps {
  title?: string;
  // menuList?: MenuList;
  // user?: User | null;
  // onLogin?: () => void;
  // onLogout?: () => void;
  // join?: () => void;
  // containerColor?: string;
}

// export const NavigationBar = ({ title, menuList = [], user, onLogin, onLogout, join, containerColor }: NavigationBarProps) => {
export const NavigationBar = ({ title }: NavigationBarProps) => {
  return (
    <NavigationBarStyle.Container>
      <NavigationBarStyle.Wrapper>
        <NavigationBarStyle.BannerAdd>
          <NavigationBarStyle.BannerText>Free US shipping on order $80+</NavigationBarStyle.BannerText>
        </NavigationBarStyle.BannerAdd>
        <NavigationBarStyle.Navigation>
          <NavigationBarStyle.Frame1>
            <NavigationBarStyle.MainLogo>
              <Image src={MainLogo} alt='mainlogo'/>
            </NavigationBarStyle.MainLogo>
            <NavigationBarStyle.Navis>
              <NavigationBarStyle.NavisText>
                <Link href="/login">
                  Men
                </Link>
              </NavigationBarStyle.NavisText>
              <NavigationBarStyle.NavisText>Women</NavigationBarStyle.NavisText>
              <NavigationBarStyle.NavisText>Accessories</NavigationBarStyle.NavisText>
              <NavigationBarStyle.NavisText>About</NavigationBarStyle.NavisText>
              <NavigationBarStyle.NavisShare>
                <NavigationBarStyle.NavisShareText>Shoe Finder Quiz</NavigationBarStyle.NavisShareText>
              </NavigationBarStyle.NavisShare>
            </NavigationBarStyle.Navis>
          </NavigationBarStyle.Frame1>
          <NavigationBarStyle.Link>
            <NavigationBarStyle.Supp>Support</NavigationBarStyle.Supp>
            <NavigationBarStyle.Icons>
              <Image src={User} alt='userIcon'/>
            </NavigationBarStyle.Icons>
            <NavigationBarStyle.Icons>
              <Image src={Bag} alt='bagIcon'/>
            </NavigationBarStyle.Icons>
          </NavigationBarStyle.Link>
        </NavigationBarStyle.Navigation>
      </NavigationBarStyle.Wrapper>
    </NavigationBarStyle.Container>
  );
};
