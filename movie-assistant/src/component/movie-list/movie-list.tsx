import Button from '../button'
import TwoSide from '../two-side'
import * as S from './movie-list.style'
import * as action from '../../store/movie-assistant/movie-assistant.action'
import { useSelector, useDispatch } from 'react-redux'

const defaultPhoto =
  'https://media.istockphoto.com/vectors/man-on-top-of-mountain-with-flag-thin-line-icon-discoverer-victory-vector-id1214504715'

const MovieList = () => {
  const state = useSelector(({ movieAssitant }: any) => movieAssitant)
  const { page, totalResults, list, term, viewType } = state

  const dispatch = useDispatch()
  const totalPages = Math.ceil(totalResults / 10)

  const previousPage = () => {
    dispatch(action.changePageAction(page - 1, term))
  }

  const nextPage = () => {
    dispatch(action.changePageAction(page + 1, term))
  }

  const select = (imdbID: string) => {
    dispatch(action.selectMovieAction(imdbID))
  }

  const setViewType = (viewType: 'grid' | 'list') => {
    dispatch(action.setViewType(viewType))
  }

  return (
    <S.Background>
      <TwoSide>
        <S.Text aria-label="Total results found">
          {totalResults} Results found
        </S.Text>
        <div />
        <S.Text>
          <p aria-label="Current page of total pages">
            Page {page} of {totalPages}
          </p>

          <Button
            ariaLabel="Previous page"
            onClick={previousPage}
            disabled={page < 2}
            hideOnMobile={false}
          >
            <i className="mmtflix-back-arrow"></i>
          </Button>

          <Button
            hideOnMobile={false}
            ariaLabel="Next page"
            onClick={nextPage}
            disabled={page >= totalPages}
          >
            <i className="mmtflix-forward-arrow"></i>
          </Button>

          <Button
            hideOnMobile
            ariaLabel="Previous page"
            onClick={() => setViewType('grid')}
          >
            <i className="mmtflix-grid"></i>
          </Button>

          <Button
            hideOnMobile
            ariaLabel="Previous page"
            onClick={() => setViewType('list')}
          >
            <i className="mmtflix-list"></i>
          </Button>
        </S.Text>
      </TwoSide>

      {/* za grid */}
      <S.Grid viewType={viewType}>
        {list.map(({ Title, Year, Poster, imdbID }: any) => (
          <div key={imdbID} id={imdbID} onClick={() => select(imdbID)}>
            <S.Poster
              aria-label="Poster image"
              imagePath={Poster === 'N/A' ? defaultPhoto : Poster}
            />
            <S.Title aria-label="Movie title">{Title}</S.Title>
            <S.Title aria-label="Movie year release">{Year}</S.Title>
          </div>
        ))}
      </S.Grid>
    </S.Background>
  )
}

export default MovieList
