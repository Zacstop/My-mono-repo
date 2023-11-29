import styled from 'styled-components';

type ContainerProps = {
  $containerColor?: string;
};

export const FooterStyle = {
  Container: styled.div<ContainerProps>`
    display: flex;
    color: #fff;
    background: #02021D;
    padding: 80px 135px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
    /* mobile */
    @media (max-width: 375px) {
      
    }
  `,

  Wrapper: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 30px;
  `,

  FooterContact: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  `,

  MainLogo: styled.div`
    display: flex;
    width: 180px;
    height: 68px;
    padding: 16.32px 0px;
    justify-content: center;
    align-items: center;
  `,

  Desc: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  `,

  ContactDes: styled.div`
    width: 370px;
    color: #FFF;

    /* Body Text/Regular */
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  `,

  ContactButton: styled.button`
    display: flex;
    width: 320px;
    padding: 12px 24px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    border-radius: 32px;
    border: 1px solid #FFF;
    background-color: #02021D;
    color: #fff;
  `,

  Link: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
  `,
  
  Categories: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 30px;
  `,

  Lists: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  `,

  CategorySubTitle: styled.div`
    color: #FFF;

    /* Body Text/Medium */
    font-family: Rubik;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 120% */
  `,

  ListItems: styled.div`
    min-width: 170px;
    color: #FFF;

    /* Body Text/Regular */
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  `,

  SocialMedia: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  `,

  SNS: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
  `,

  SNSIcon: styled.img`
    width: 24px;
    height: 24px;
  `,

  SNSName: styled.div`
    min-width: 134px;
    color: #FFF;

    /* Body Text/Regular */
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  `
};
