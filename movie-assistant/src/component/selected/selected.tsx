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
        <S.SelectedPoster Poster={selected.Poster} />
        <div>
          <S.SelectedTitle>{selected.Title}</S.SelectedTitle>
          <S.SelectedDescription>
            Director: {selected.Director}
          </S.SelectedDescription>
          <S.SelectedDescription>Genre: {selected.Genre}</S.SelectedDescription>
          <S.SelectedDescription>
            Writer: {selected.Writer}
          </S.SelectedDescription>
          <S.SelectedDescription>
            Actors: {selected.Actors}
          </S.SelectedDescription>
          <S.SelectedDescription>
            Production: {selected.Production}
          </S.SelectedDescription>
          <S.SelectedDescription>Plot: {selected.Plot}</S.SelectedDescription>
        </div>
        <S.SelectedClose onClick={close}>&times;</S.SelectedClose>
      </S.SelectedGrid>
    </S.Selected>
  )
}

export default Selected
