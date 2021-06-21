import * as type from './movie-assistant.type'
import * as constant from './movie-assistant.constant'

export const movieAssistantReducer = (
  state = constant.INITIAL_STATE,
  action: type.IAction
): type.IInitialState => {
  switch (action.type) {
    case constant.CHANGE_PAGE:
      return {
        ...state,
        isLoading: true,
        page: action.page || 1,
      }

    case constant.SEARCH_FETCH:
      return {
        ...state,
        term: action.term || '',
        isLoading: true,
      }

    case constant.TOGGLE_VIEW_TYPE:
      return {
        ...state,
        viewType: action.viewType,
      }

    case constant.UNSELECT_MOVIE:
      return {
        ...state,
        imdbID: '',
        selected: {},
      }

    case constant.SELECT_MOVIE_FETCH:
      return {
        ...state,
        imdbID: action.imdbID || '',
        isLoading: true,
      }

    case constant.SEARCH_FETCH_SUCCESS:
      return {
        ...state,
        list: action.list || [],
        page: action.page || 1,
        totalResults: action.totalResults || 0,
        isLoading: false,
      }

    case constant.SELECT_MOVIE_FETCH_SUCCESS:
      return {
        ...state,
        selected: action.selected,
        isLoading: false,
      }

    case constant.SEARCH_FETCH_FAILURE:
      return {
        ...state,
        error: action.message || null,
        isLoading: false,
      }

    default:
      return state
  }
}
