// http://www.omdbapi.com/?apikey=c01871ba&s=horror&page=1
import * as movieAssistantType from './movie-assistant.type'

const API_KEY = 'c01871ba'
export const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`

export const SEARCH_FETCH = '[movie-assistant] SEARCH_FETCH'
export const SEARCH_FETCH_SUCCESS = '[movie-assistant] SEARCH_FETCH_SUCCESS ='
export const SEARCH_FETCH_FAILURE = '[movie-assistant] SEARCH_FETCH_FAILURE'

export const SELECT_MOVIE = '[movie-assistant] SELECT_MOVIE'
export const UNSELECT_MOVIE = '[movie-assistant] UNSELECT_MOVIE'
export const SELECT_MOVIE_FETCH = '[movie-assistant] SELECT_MOVIE_FETCH'
export const SELECT_MOVIE_FETCH_SUCCESS =
  '[movie-assistant] SELECT_MOVIE_FETCH_SUCCESS ='
export const SELECT_MOVIE_FETCH_FAILURE =
  '[movie-assistant] SELECT_MOVIE_FETCH_FAILURE'

export const CHANGE_PAGE = '[movie-assistant] CHANGE_PAGE'

export const INITIAL_STATE: movieAssistantType.IInitialState = {
  list: [],
  error: null,
  isLoading: false,
  totalResults: 0,
  page: 1,
  term: '',
  imdbID: '',
  selected: {},
}
