import styled from 'styled-components'

export const Text = styled.div`
  color: ${({ theme }) => theme.color.dark.text};
  padding: 20px;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
`

export const Background = styled.div`
  background-color: ${({ theme }) => theme.color.dark.backgroundGray};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  color: ${({ theme }) => theme.color.dark.text};
  padding: 20px;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1120px;
`

export const Header = styled.header`
  margin: 60px auto 42px;
`
