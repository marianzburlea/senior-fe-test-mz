import * as type from './movie-assistant.type'
import * as constant from './movie-assistant.constant'

export const test = () => {}

export const changePage = (page: number) => ({
  type: constant.CHANGE_PAGE,
  page,
})

export const changePageAction = (page: number) => {
  return async (dispatch: any) => {
    dispatch(changePage(page))
    const searchTerm = 'salut'

    try {
      const url = `${constant.API_URL}s=${searchTerm}&page=${page}`

      const { Search: list, totalResults } = await (await fetch(url)).json()
      dispatch(searchActionSuccess(list, totalResults, page))
    } catch (error) {}
  }
}

export const search = (term: string) => ({
  type: constant.SEARCH_FETCH,
  term,
})

export const searchAction = (term: string) => {
  return async (dispatch: any) => {
    dispatch(search(term))

    try {
      const url = `${constant.API_URL}s=${term}&page=${1}`

      const { Search: list, totalResults } = await (await fetch(url)).json()
      dispatch(searchActionSuccess(list, totalResults, 1))
    } catch (error) {}
  }
}

export const searchActionSuccess = (
  list: type.IMovie[],
  totalResults: number,
  page: number
) => ({
  type: constant.SEARCH_FETCH_SUCCESS,
  list,
  totalResults,
  page,
})

export const searchActionFailure = (message: string) => ({
  type: constant.SEARCH_FETCH_FAILURE,
  message,
})
