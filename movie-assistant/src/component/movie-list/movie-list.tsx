import Button from '../button'
import TwoSide from '../two-side'
import * as S from './movie-list.style'
import * as action from '../../store/movie-assistant/movie-assistant.action'
import { useSelector, useDispatch } from 'react-redux'
import { Fragment } from 'react'

const defaultPhoto =
  'https://media.istockphoto.com/vectors/man-on-top-of-mountain-with-flag-thin-line-icon-discoverer-victory-vector-id1214504715'

const MovieList = () => {
  const state = useSelector(({ movieAssitant }: any) => movieAssitant)
  const { page, totalResults, list, term } = state

  const dispatch = useDispatch()
  // const list: {
  //   Title: string
  //   Year: string
  //   Poster: string
  //   imdbID: string
  //   Type: string
  // }[] = []
  const totalPages = Math.ceil(totalResults / 10)

  const previousPage = () => {
    dispatch(action.changePageAction(page - 1, term))
  }

  const nextPage = () => {
    dispatch(action.changePageAction(page + 1, term))
  }

  const select = (imdbID: string) => {
    console.log('Select movie')
    dispatch(action.selectMovieAction(imdbID))
  }

  return (
    <S.Background>
      <TwoSide>
        <S.Text>{totalResults} Results found</S.Text>
        <div />
        <S.Text>
          <p>
            Page {page} of {totalPages}
          </p>

          <Button onClick={previousPage} disabled={page < 2}>
            <i className="mmtflix-back-arrow"></i>
          </Button>

          <Button onClick={nextPage} disabled={page >= totalPages}>
            <i className="mmtflix-forward-arrow"></i>
          </Button>
        </S.Text>
      </TwoSide>

      {/* za grid */}
      <S.Grid>
        {list.map(({ Title, Year, Poster, imdbID }: any) => (
          <div key={imdbID} id={imdbID} onClick={() => select(imdbID)}>
            <S.Poster imagePath={Poster === 'N/A' ? defaultPhoto : Poster} />
            <S.Title>{Title}</S.Title>
            <S.Title>{Year}</S.Title>
          </div>
        ))}
      </S.Grid>
    </S.Background>
  )
}

export default MovieList
