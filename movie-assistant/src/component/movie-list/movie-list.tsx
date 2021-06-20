import Button from '../button'
import TwoSide from '../two-side'
import * as S from './movie-list.style'
import * as action from '../../store/movie-assistant/movie-assistant.action'
import { useSelector, useDispatch } from 'react-redux'

const MovieList = () => {
  const state = useSelector(({ movieAssitant }: any) => movieAssitant)
  const { page, totalResults, list } = state

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
    dispatch(action.changePageAction(page - 1))
  }

  const nextPage = () => {
    dispatch(action.changePageAction(page + 1))
  }

  return (
    <S.Background>
      <TwoSide>
        <S.Text>{totalResults} Results found</S.Text>
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
      {list.map(({ Title, Year, Poster, imdbID, Type }: any) => (
        <div key={imdbID}>
          {Title} - {Year} = {Type}
        </div>
      ))}
    </S.Background>
  )
}

export default MovieList
