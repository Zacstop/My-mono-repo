'use client'

import React from 'react';
import { FooterStyle } from './Footer.styles';
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

export interface FooterProps {
  title?: string;
  // menuList?: MenuList;
  // user?: User | null;
  // onLogin?: () => void;
  // onLogout?: () => void;
  // join?: () => void;
  // containerColor?: string;
}

// export const Footer = ({ title, menuList = [], user, onLogin, onLogout, join, containerColor }: FooterProps) => {
export const Footer = ({ title }: FooterProps) => {
  return (
    <FooterStyle.Container>
      <FooterStyle.Wrapper>
        <FooterStyle.FooterContact>
          <FooterStyle.MainLogo>
            <Image src={Logo} alt='logo'/>
          </FooterStyle.MainLogo>
          <FooterStyle.Desc>
            <FooterStyle.ContactDes>
              Stay informed about Sopa with our latest 
              releases and founder news.
            </FooterStyle.ContactDes>
            <FooterStyle.ContactButton>
              Enter email here for updates
            </FooterStyle.ContactButton>
          </FooterStyle.Desc>
        </FooterStyle.FooterContact>

        <FooterStyle.Link>
          <FooterStyle.Categories>
            <FooterStyle.Lists>
              <FooterStyle.CategorySubTitle>Products</FooterStyle.CategorySubTitle>
              <FooterStyle.ListItems>Model 000</FooterStyle.ListItems>
              <FooterStyle.ListItems>Model 001</FooterStyle.ListItems>
              <FooterStyle.ListItems>Laces</FooterStyle.ListItems>
              <FooterStyle.ListItems>Masks</FooterStyle.ListItems>
              <FooterStyle.ListItems>No-show Socks</FooterStyle.ListItems>
              <FooterStyle.ListItems>Crew Socks</FooterStyle.ListItems>
              <FooterStyle.ListItems>Gift Cards</FooterStyle.ListItems>
            </FooterStyle.Lists>
            <FooterStyle.Lists>
              <FooterStyle.CategorySubTitle>Support</FooterStyle.CategorySubTitle>
              <FooterStyle.ListItems>Help Center</FooterStyle.ListItems>
              <FooterStyle.ListItems>FAQs</FooterStyle.ListItems>
              <FooterStyle.ListItems>Order</FooterStyle.ListItems>
              <FooterStyle.ListItems>Order Status</FooterStyle.ListItems>
              <FooterStyle.ListItems>Returns & Exchanges</FooterStyle.ListItems>
              <FooterStyle.ListItems>Contact Us</FooterStyle.ListItems>
            </FooterStyle.Lists>
            <FooterStyle.Lists>
              <FooterStyle.CategorySubTitle>Everything Else</FooterStyle.CategorySubTitle>
              <FooterStyle.ListItems>Community</FooterStyle.ListItems>
              <FooterStyle.ListItems>Why Sopa</FooterStyle.ListItems>
              <FooterStyle.ListItems>About</FooterStyle.ListItems>
              <FooterStyle.ListItems>Discount Program</FooterStyle.ListItems>
              <FooterStyle.ListItems>Sopa Blog</FooterStyle.ListItems>
              <FooterStyle.ListItems>Sopa Ambassadors</FooterStyle.ListItems>
            </FooterStyle.Lists>
          </FooterStyle.Categories>
          <FooterStyle.SocialMedia>
            <FooterStyle.SNS>
              <Image src={TwitterIcon} alt='twit'/>
              <FooterStyle.SNSName>Twitter</FooterStyle.SNSName>
            </FooterStyle.SNS>
            <FooterStyle.SNS>
              <Image src={InstagramIcon} alt='insta'/>
              {/* <FooterStyle.SNSIcon src={InstagramIcon}></FooterStyle.SNSIcon> */}
              <FooterStyle.SNSName>Instagram</FooterStyle.SNSName>
            </FooterStyle.SNS>
            <FooterStyle.SNS>
              <Image src={FacebookIcon} alt='face'/>
              {/* <FooterStyle.SNSIcon src={FacebookIcon}></FooterStyle.SNSIcon> */}
              <FooterStyle.SNSName>Facebook</FooterStyle.SNSName>
            </FooterStyle.SNS>
          </FooterStyle.SocialMedia>
        </FooterStyle.Link>
      </FooterStyle.Wrapper>
    </FooterStyle.Container>
  );
};
