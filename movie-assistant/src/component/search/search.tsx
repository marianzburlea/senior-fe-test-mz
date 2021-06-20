import { FormEvent, useEffect, useState } from 'react'
import * as S from './search.style'
import * as action from '../../store/movie-assistant/movie-assistant.action'
// import { API_URL } from '../movie-assitant/movie-assistant.constant'
import { useSelector, useDispatch } from 'react-redux'
import { API_URL } from '../../store/movie-assistant/movie-assistant.constant'

const Search = (): JSX.Element => {
  const [searchTerm, updateTerm] = useState('')
  const dispatch = useDispatch()
  const state = useSelector(({ movieAssitant }: any) => movieAssitant)
  const { isLoading, list, error, page } = state

  const handleSearch = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement
    updateTerm(value)
  }

  const sendData = async (e?: FormEvent) => {
    e && e.preventDefault()
    dispatch(action.searchAction(searchTerm))

    // const url = `${API_URL}s=${searchTerm}&page=${page}`

    // const { Search: list, totalResults } = await (await fetch(url)).json()
    // dispatch(action.searchActionSuccess(list, totalResults, 1))
  }

  return (
    <form onSubmit={sendData}>
      <S.Search>
        <S.SearchInput
          type="search"
          placeholder="Search here..."
          onChange={handleSearch}
          value={searchTerm}
          autoFocus
        />
        <i className="mmtflix-search2"></i>
      </S.Search>

      {isLoading && <S.SearchInfo>Loading...</S.SearchInfo>}
    </form>
  )
}

export default Search
