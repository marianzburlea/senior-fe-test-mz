import styled from 'styled-components'

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.color.dark.text};
  color: ${({ theme }) => theme.color.dark.text};
  border-radius: 6px;
  width: 44px;
  height: 44px;
  cursor: pointer;
  overflow: hidden;
  transition: 150ms ease-in;
  margin-left: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  background-color: transparent;

  &:disabled {
    cursor: no-drop;
    opacity: 0.5;
  }

  &:hover {
    color: white;
    background-color: #000;
  }
`
