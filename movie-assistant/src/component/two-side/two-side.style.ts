import styled from 'styled-components'

export const TwoSide = styled.div`
  display: grid;
  grid-gap: 20px;

  @media only screen and (max-width: 768px) {
    & > div:not(:first-child):not(:last-child) {
      display: none;
    }
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: auto 1fr auto;
  }

  & > div:first-child {
    /* margin-left: 1rem; */
  }
`
