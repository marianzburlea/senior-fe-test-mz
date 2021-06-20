import * as type from './movie-assistant.type'
import * as constant from './movie-assistant.constant'

export const searchAction = () => ({
  type: constant.SEARCH_FETCH,
})

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
