import styled from 'styled-components';

type ContainerProps = {
  $containerColor?: string;
};

export const NavigationBarStyle = {
  Container: styled.div<ContainerProps>`
    display: flex;
    padding-bottom: 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    background: #FFF;
    
    /* mobile */
    @media (max-width: 375px) {
      
    }
  `,

  Wrapper: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  `,

  BannerAdd: styled.div`
    display: flex;
    width: 100%;
    min-width: 1440px;
    padding: 10px;
    justify-content: center;
    align-items: flex-start;
    background: #02021D;
`,

  BannerText: styled.div`
    color: #FFF;
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  `,

  Navigation: styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    gap: 195px;
  `,

  Frame1: styled.div`
    display: flex;
    align-items: center;
    gap: 207px;
  `,

  MainLogo: styled.div`
    display: flex;
    width: 144px;
    height: 46px;
    padding: 11.04px 0px;
    justify-content: center;
    align-items: center;
  `,

  Navis: styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
  `,

  NavisText: styled.div`
    color: #02021D;
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  `,

  NavisShare: styled.div`
    display: flex;
    padding: 8px 12px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 24px;
    border: 1px solid #81D376;
    background: var(--secondary-colors-white, #FFF);
  `,

  NavisShareText: styled.div`
    color: #81D376;

    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  `,

  Link: styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
  `,

  Supp: styled.div`
    color: #02021D;

    /* Body Text/Regular */
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  `,

    Icons: styled.div`
      width: 24px;
      height: 24px;
  `,
};
