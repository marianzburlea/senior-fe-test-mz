import styled from 'styled-components'

export const TwoSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div:first-child {
    margin-left: 1rem;
  }
`
