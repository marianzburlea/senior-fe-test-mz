import { useSelector, useDispatch } from 'react-redux'
import * as S from './selected.style'
import * as action from '../../store/movie-assistant/movie-assistant.action'

const Selected = () => {
  const state = useSelector(({ movieAssitant }: any) => movieAssitant)
  const dispatch = useDispatch()
  const { selected } = state
  const show = Object.keys(selected).length

  const close = () => {
    dispatch(action.unselectMovie())
  }

  return (
    <S.Selected show={show}>
      <S.SelectedGrid>
        <S.SelectedPoster
          aria-label="Selected movie poster"
          Poster={selected.Poster}
        />
        <div>
          <S.SelectedTitle aria-label="Selectred movie title">
            {selected.Title}
          </S.SelectedTitle>
          <S.SelectedDescription aria-label="Selected movie director">
            Director: {selected.Director}
          </S.SelectedDescription>
          <S.SelectedDescription aria-label="Genre of the movie">
            Genre: {selected.Genre}
          </S.SelectedDescription>
          <S.SelectedDescription aria-label="Who wrote the movie">
            Writer: {selected.Writer}
          </S.SelectedDescription>
          <S.SelectedDescription aria-label="Who played the movie">
            Actors: {selected.Actors}
          </S.SelectedDescription>
          <S.SelectedDescription aria-label="Movie production">
            Production: {selected.Production}
          </S.SelectedDescription>
          <S.SelectedDescription aria-label="Movie plot">
            Plot: {selected.Plot}
          </S.SelectedDescription>
        </div>
        <S.SelectedClose aria-label="Close the selected movie" onClick={close}>
          &times;
        </S.SelectedClose>
      </S.SelectedGrid>
    </S.Selected>
  )
}

export default Selected
