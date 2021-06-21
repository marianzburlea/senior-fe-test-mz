import styled from 'styled-components'

export const Loading = styled.div`
  color: ${({ theme }) => theme.color.dark.text};
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  @media (prefers-color-scheme: light) {
    color: ${({ theme }) => theme.color.light.text};
  }
`

export const SearchInfo = styled.div`
  color: ${({ theme }) => theme.color.dark.text};

  @media (prefers-color-scheme: light) {
    color: ${({ theme }) => theme.color.light.text};
  }
`

export const SearchError = styled.div`
  color: #c00;
  padding: ${({ theme }) => theme.padding.rectangle};
  border-color: 1px solid #c00;
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

  @media (prefers-color-scheme: light) {
    color: ${({ theme }) => theme.color.light.text};

    & .mmtflix-search2 {
      color: ${({ theme }) => theme.color.light.text};
    }
  }
`

export const SearchInput = styled.input`
  color: ${({ theme }) => theme.color.dark.text};
  background-color: ${({ theme }) => theme.color.dark.background};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  border: 0.2rem solid ${({ theme }) => theme.color.dark.text};
  background-color: transparent;
  height: 5rem;
  padding: 0 2rem;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.4rem;
  width: 100%;

  &:placeholder-shown + .mmtflix-search2 {
    opacity: 1;
  }

  @media (prefers-color-scheme: light) {
    color: ${({ theme }) => theme.color.light.text};
    background-color: ${({ theme }) => theme.color.light.background};
    border: 0.2rem solid ${({ theme }) => theme.color.light.text};
  }

  @media screen and (min-width: 768px) {
    width: 500px;
    margin-left: 2rem;
  }
`
