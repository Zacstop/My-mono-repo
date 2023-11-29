'use client'

import React from "react";
import styled from 'styled-components';
import { NavigationBar } from "@/stories/NavigationBar";
import { Footer } from "@/stories/Footer";
import { SignIn } from "@/template/Signin/SignIn"
import { SignUp } from "@/template/Signup/SignUp";

const LoginLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  min-width: 1440px;
  margin: 0 auto;
`;

const LoginContainer = styled.div`
  display: flex;
  padding: 80px 485px;
  min-height: 666px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #fff;
`;

function page() {
  return (
    <LoginLayout>
      <NavigationBar title={"asdf"}></NavigationBar>
      <LoginContainer>
        <SignIn/>
        {/* <SignUp/> */}
      </LoginContainer>
      <Footer/>
    </LoginLayout>
  );
}

export default page;

