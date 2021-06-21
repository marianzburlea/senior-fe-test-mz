import styled from 'styled-components'

export const Selected = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.dark.background};
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  @media (prefers-color-scheme: light) {
    color: ${({ theme }) => theme.color.light.text};
    background-color: ${({ theme }) => theme.color.light.background};
  }
`

export const SelectedGrid = styled.div`
  padding: 4rem;
  background-color: ${({ theme }) => theme.color.dark.backgroundGray};
  color: ${({ theme }) => theme.color.dark.text};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 2fr;
  overflow: hidden;
  max-width: 80vw;
  position: relative;
  max-height: 80vh;
  overflow-y: auto;

  @media (prefers-color-scheme: light) {
    color: ${({ theme }) => theme.color.light.text};
    background-color: ${({ theme }) => theme.color.light.backgroundGray};
  }
`

export const SelectedClose = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 4rem;
  cursor: pointer;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.dark.text};
  background-color: ${({ theme }) => theme.color.dark.background};

  @media (prefers-color-scheme: light) {
    color: ${({ theme }) => theme.color.light.text};
    background-color: ${({ theme }) => theme.color.light.background};
  }
`

export const SelectedTitle = styled.h1`
  padding: ${({ theme }) => theme.padding.rectangle};
  color: ${({ theme }) => theme.color.dark.text};
  font-size: 3.6rem;

  @media (prefers-color-scheme: light) {
    color: ${({ theme }) => theme.color.light.text};
  }
`

export const SelectedDescription = styled.p`
  padding: ${({ theme }) => theme.padding.rectangle};
  color: ${({ theme }) => theme.color.dark.text};
  font-size: 1.8rem;

  @media (prefers-color-scheme: light) {
    color: ${({ theme }) => theme.color.light.text};
  }
`

export const SelectedPoster = styled.div<any>`
  background-image: url(${({ Poster }: any) => Poster});
  background-position: top center;
  background-repeat: no-repeat;
  /* 300/226 = 1.327433628318584 */
  padding-top: 132.75%;
  width: 300px;
`
