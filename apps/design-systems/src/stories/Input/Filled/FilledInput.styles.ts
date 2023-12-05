import styled from 'styled-components';

type ContainerProps = {
  $containerColor?: string;
};

export const FilledInputStyle = {
  Container: styled.div<ContainerProps>`
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: #FFF;
  min-width: 490px;

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
  border: 1px solid;
  border-color: #E3E5ED;
  box-sizing: border-box;
  border-radius: 16px;

  &:valid {
    border-color: #3184FF;
    color: 3184FF;
  }

  &:invalid {
    border-color: #F14E2E;
    color: F14E2E;
  }

  ::placeholder {
    opacity: 0;
  }

  &:focus {
    border: 1px solid #3184FF;
    background: #FFF;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 12px;
    font-size: 0.6rem;
    background: transparent;
    padding: 7px;
  }
`,

Label: styled.label`
  pointer-events: none;
  user-select: none;
  position: absolute;
  left: 10px;
  top: 45%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: gray;
  letter-spacing: 1px;
  transition: .3s;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
`,
};
