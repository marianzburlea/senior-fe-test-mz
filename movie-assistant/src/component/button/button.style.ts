import styled from 'styled-components'

export const Button = styled.button<any>`
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
    color: ${({ theme }) => theme.color.dark.text};
    background-color: ${({ theme }) => theme.color.dark.background};
  }

  @media screen and (max-width: 768px) {
    display: ${({ hideOnMobile }) => (hideOnMobile ? 'none' : 'block')};
  }

  @media (prefers-color-scheme: light) {
    border: 2px solid ${({ theme }) => theme.color.light.text};
    color: ${({ theme }) => theme.color.light.text};

    &:hover {
      color: ${({ theme }) => theme.color.light.text};
      background-color: ${({ theme }) => theme.color.light.background};
    }
  }
`
