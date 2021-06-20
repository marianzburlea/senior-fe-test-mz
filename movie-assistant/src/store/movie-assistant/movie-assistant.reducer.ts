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
        page: action.page || 1,
      }

    case constant.SEARCH_FETCH:
      return {
        ...state,
        term: action.term || '',
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
