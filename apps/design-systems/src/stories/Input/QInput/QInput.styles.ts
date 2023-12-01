import styled from 'styled-components';

type ContainerProps = {
  $containerColor?: string;
};

export const QInputStyle = {
  Container: styled.div<ContainerProps>`
    display: inline-flex;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 8px;
    background: #FFF;
    
    /* mobile */
    @media (max-width: 375px) {
      
    }
  `,

  Wrapper: styled.div`
    position: relative;
    width: 100%;
  `,

  Input: styled.input`
    width: 100%;
    height: 60px;
    font-size: 1.2rem;
    padding: 10px;
    outline: none;
    border: 1px solid '#E3E5ED' !important;
    box-sizing: border-box;
    border-radius: 8px;

    ::placeholder {
      opacity: 0;
    }

    &:focus {
      border: 1px solid #3184FF;
      background: #FFF;
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      top: 0;
      font-size: 0.8rem;
      color: indigo;
      background: #fff;
      padding: 7px;
    }
  `,

  QIcon: styled.div`
    width: 24px;
    height: 24px;
  `,
  
  Label: styled.label`
    pointer-events: none;
    user-select: none;
    position: absolute;
    left: 10px;
    top: 33%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: gray;
    letter-spacing: 1px;
    transition: .3s;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
  `,
};
