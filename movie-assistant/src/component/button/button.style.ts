import styled from 'styled-components'

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.color.dark.text};
  border-radius: 6px;
  width: 44px;
  height: 44px;
  cursor: pointer;
  overflow: hidden;
  transition: 250ms ease-in;
  margin-left: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.s};

  &:hover {
    color: white;
    background-color: #000;
  }
`
