import styled from 'styled-components';

type ContainerProps = {
  $containerColor?: string;
};

export const SignInStyle = {
  Container: styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
    
    /* mobile */
    @media (max-width: 375px) {
      
    }
  `,

  Wrapper: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 30px;
  `,

  SignIn: styled.div`
    width: 470px;
    color: #02021D;

    /* Headers/T4 */
    font-family: Noto Serif Lao;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px; /* 116.667% */
  `,
  
  SignInput: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  `,

  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  `,

  EmailInput: styled.input`
    display: flex;
    min-width: 470px;
    height: 56px;
    padding: 17px 20px;
    align-items: flex-start;
    gap: 10px;
    width: 450px;
    border-radius: 16px;
    border: 1px solid #E3E5ED;
    background: #FFF;
  `,

  LoginButton: styled.div`
    display: flex;
    width: 470px;
    padding: 17px 24px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    color: #FFF;
    text-align: center;

    /* Body Text/Regular */
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  `,

  SignUp: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
  `,

  Creaccount: styled.div`
    color: #02021D;
    text-align: center;

    /* Underline Text/Regular */
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
    text-decoration-line: underline;
  `,
};
