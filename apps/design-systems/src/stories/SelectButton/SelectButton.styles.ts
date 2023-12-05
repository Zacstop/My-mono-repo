import styled from 'styled-components';

type ContainerProps = {
  $containerColor?: string;
};

export const SelectButtonStyle = {
  Container: styled.div<ContainerProps>`
    width: 330px;
    height: 56px;

  /* mobile */
  @media (max-width: 375px) {
    
  }
  `,

  Wrapper: styled.div`
    width: 330px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 36px;
    border: 1px solid #E3E5ED;
    background: #FFF;
  `,

  Options: styled.div`

  `,

  BtnOne: styled.button`
  
  `,
  
  BtnTwo: styled.button`
  
  `,
};
