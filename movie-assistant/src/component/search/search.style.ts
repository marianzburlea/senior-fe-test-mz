import styled from 'styled-components'

export const Search = styled.div`
  position: relative;

  & .mmtflix-search2 {
    position: absolute;
    top: 1.3rem;
    right: 2rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.color.dark.text};
    transition: 250ms;
    opacity: 0;
  }
`

export const SearchInput = styled.input`
  color: ${({ theme }) => theme.color.dark.text};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  border: 0.2rem solid ${({ theme }) => theme.color.dark.text};
  background-color: transparent;
  height: 50px;
  padding: 0 20px;

  &:placeholder-shown + .mmtflix-search2 {
    opacity: 1;
  }
`
