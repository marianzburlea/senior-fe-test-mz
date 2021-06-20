import { Dispatch, FormEvent, useState } from 'react'
import * as movieAssistantType from '../movie-assitant/movie-assistant.type'
import * as S from './search.style'
import * as action from '../movie-assitant/movie-assistant.action'
import movieAssistant from '../movie-assitant/movie-assistant'
import { API_URL } from '../movie-assitant/movie-assistant.constant'

interface ISearch {
  dispatch: Dispatch<movieAssistantType.IAction>
  state: movieAssistantType.IInitialState
}

const Search = ({ dispatch, state }: ISearch): JSX.Element => {
  const [searchTerm, updateTerm] = useState('')
  const { isLoading, list, error } = state

  const handleSearch = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement
    updateTerm(value)
  }

  const sendData = async (e: FormEvent) => {
    e.preventDefault()
    dispatch(action.searchAction())

    const url = `${API_URL}s=${searchTerm}&page=1`

    const { Search: list, totalResults } = await (await fetch(url)).json()
    dispatch(action.searchActionSuccess(list, totalResults, 1))
  }

  return (
    <form onSubmit={sendData}>
      <S.Search>
        <S.SearchInput
          type="search"
          placeholder="Search here..."
          onChange={handleSearch}
          value={searchTerm}
        />
        <i className="mmtflix-search2"></i>
      </S.Search>

      {isLoading && <S.SearchInfo>Loading...</S.SearchInfo>}
    </form>
  )
}

export default Search
