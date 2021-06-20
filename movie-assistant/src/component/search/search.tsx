import { FormEvent } from 'react'
import * as S from './search.style'

const Search = () => {
  const handleSearch = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement
    console.log(value)
  }

  return (
    <S.Search>
      <S.SearchInput
        type="search"
        placeholder="Search here..."
        onChange={handleSearch}
      />
      <i className="mmtflix-search2"></i>
    </S.Search>
  )
}

export default Search
