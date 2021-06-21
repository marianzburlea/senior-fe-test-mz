import * as type from './movie-assistant.type'
import * as constant from './movie-assistant.constant'

export const selectMovie = (imdbID: string) => ({
  type: constant.SELECT_MOVIE_FETCH,
  imdbID,
})

export const unselectMovie = () => ({
  type: constant.UNSELECT_MOVIE,
})

export const setViewType = (viewType: 'grid' | 'list') => ({
  type: constant.TOGGLE_VIEW_TYPE,
  viewType,
})

export const selectMovieAction = (imdbID: string) => {
  return async (dispatch: any): Promise<void> => {
    dispatch(selectMovie(imdbID))

    try {
      // ?i=tt0167710&plot=full
      const url = `${constant.API_URL}i=${imdbID}&plot=full`

      const result = await (await fetch(url)).json()
      dispatch(selectMovieActionSuccess(result))
    } catch (error) {
      dispatch(selectMovieActionFailure(error.message))
    }
  }
}

export const selectMovieActionSuccess = (selected: any) => ({
  type: constant.SELECT_MOVIE_FETCH_SUCCESS,
  selected,
})

export const selectMovieActionFailure = (error: any) => ({
  type: constant.SELECT_MOVIE_FETCH_FAILURE,
  error,
})

export const changePage = (page: number) => ({
  type: constant.CHANGE_PAGE,
  page,
})

export const changePageAction = (page: number, term?: string) => {
  return async (dispatch: any) => {
    dispatch(changePage(page))

    try {
      const url = `${constant.API_URL}s=${term}&page=${page}`

      const { Search: list, totalResults } = await (await fetch(url)).json()
      dispatch(searchActionSuccess(list, totalResults, page))
    } catch (error) {
      dispatch(searchActionFailure(error.message))
    }
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
    } catch (error) {
      dispatch(searchActionFailure(error.message))
    }
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
