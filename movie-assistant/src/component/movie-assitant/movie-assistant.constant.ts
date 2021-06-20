// http://www.omdbapi.com/?apikey=c01871ba&s=horror&page=1
import * as movieAssistantType from './movie-assistant.type'

const API_KEY = 'c01871ba'
export const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`

export const SEARCH_FETCH = '[movie-assistant] SEARCH_FETCH'
export const SEARCH_FETCH_SUCCESS = '[movie-assistant] SEARCH_FETCH_SUCCESS ='
export const SEARCH_FETCH_FAILURE = '[movie-assistant] SEARCH_FETCH_FAILURE'

export const INITIAL_STATE: movieAssistantType.IInitialState = {
  list: [],
  error: null,
  isLoading: false,
  totalResults: 0,
  page: 1,
}
