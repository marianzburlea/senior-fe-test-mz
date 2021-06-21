import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Title = styled.div`
  font-size: 16px;
`

export const Poster = styled.div`
  /* 300/226 = 1.327433628318584 */
  padding-top: 132.75%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  background-image: url(${({ imagePath }: { imagePath: string }) => imagePath});
`

export const Text = styled.div`
  color: ${({ theme }) => theme.color.dark.text};
  height: 4.6rem;
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  @media (prefers-color-scheme: light) {
    color: ${({ theme }) => theme.color.light.text};
  }
`

export const Background = styled.div`
  background-color: ${({ theme }) => theme.color.dark.backgroundGray};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  color: ${({ theme }) => theme.color.dark.text};
  padding: 2rem;

  @media (prefers-color-scheme: light) {
    background-color: ${({ theme }) => theme.color.light.backgroundGray};
    color: ${({ theme }) => theme.color.light.text};
  }
`
