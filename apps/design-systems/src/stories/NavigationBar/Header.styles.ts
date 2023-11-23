import styled from 'styled-components';

type ContainerProps = {
  $containerColor?: string;
};

export const HeaderStyle = {
  Container: styled.div<ContainerProps>`
    display: inline-flex;
    padding-bottom: 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    background: var(--secondary-colors-white, #FFF);
    
    /* mobile */
    @media (max-width: 375px) {
      
    }
  `,
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
      width: 375px;
      padding: 16px;
      justify-content: space-between;
      align-items: center;
    }
  `,
  
};
