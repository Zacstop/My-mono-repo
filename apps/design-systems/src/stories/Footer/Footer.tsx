'use client'

import React from 'react';
import { FooterStyle } from './Footer.styles';
import Logo  from '../assets/Icons/Logo-white.svg'
import TwitterIcon  from '../assets/Icons/twitter.svg'
import InstagramIcon  from '../assets/Icons/instagram.svg'
import FacebookIcon  from '../assets/Icons/facebook.svg'
import Image from 'next/image';

const DMLIST = [
  {
    title: 'Products',
    items: ["Model 000", "Model 001", "Laces", "Masks", "No-show Socks", "Crew Socks", "Gift Cards"],
  },
  {
    title: 'Support',
    items: ["Help Center", "FAQs", "Order", "Order Status", "Returns & Exchanges", "Contact Us"],
  },
  {
    title: 'Everything Else',
    items: ["Community", "Why Sopa", "About", "Discount Program", "Sopa Blog", "Sopa Ambassadors"],
  }
]

type FooterList = {
  title: string,
  items: string[],
};

export interface FooterProps {
  des?: string;
  footerList?: FooterList[];
}

export const Footer = ({ des = "Stay informed about Sopa with our latest releases and founder news.", footerList = DMLIST }: FooterProps) => {
  return (
    <FooterStyle.Container>
      <FooterStyle.Wrapper>
        <FooterStyle.FooterContact>
          <FooterStyle.MainLogo>
            <Image src={Logo} alt='logo'/>
          </FooterStyle.MainLogo>
          <FooterStyle.Desc>
            <FooterStyle.ContactDes>
              {des}
            </FooterStyle.ContactDes>
            <FooterStyle.ContactButton>
              Enter email here for updates
            </FooterStyle.ContactButton>
          </FooterStyle.Desc>
        </FooterStyle.FooterContact>

        <FooterStyle.Link>
          <FooterStyle.Categories>
            {footerList.map((list) => (
              <FooterStyle.Lists key={list.title}>
                <FooterStyle.CategorySubTitle>{list.title}</FooterStyle.CategorySubTitle>
                {list.items.map(item => (
                  <FooterStyle.ListItems key={item}>{item}</FooterStyle.ListItems>
                ))}
              </FooterStyle.Lists>
            ))}
          </FooterStyle.Categories>
          <FooterStyle.SocialMedia>
            <FooterStyle.SNS>
              <Image src={TwitterIcon} alt='twit'/>
              <FooterStyle.SNSName>Twitter</FooterStyle.SNSName>
            </FooterStyle.SNS>
            <FooterStyle.SNS>
              <Image src={InstagramIcon} alt='insta'/>
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
