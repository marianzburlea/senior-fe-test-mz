import styled from 'styled-components'

export const SearchInfo = styled.div`
  color: ${({ theme }) => theme.color.dark.text};
`

export const Search = styled.div`
  position: relative;
  color: ${({ theme }) => theme.color.dark.text};

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
  height: 5rem;
  padding: 0 2rem;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.4rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 500px;
    margin-left: 2rem;
  }

  &:placeholder-shown + .mmtflix-search2 {
    opacity: 1;
  }
`
