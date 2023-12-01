import styled from 'styled-components';

type ContainerProps = {
  $containerColor?: string;
};

export const OutlineInputStyle = {
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
};
