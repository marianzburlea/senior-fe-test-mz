import styled from 'styled-components'

export const Button = styled.button`
  border: 2px solid white;
  border-radius: 6px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  overflow: hidden;
  transition: 250ms ease-in;

  &:hover {
    color: white;
    background-color: #000;
  }
`
