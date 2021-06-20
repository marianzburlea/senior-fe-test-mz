import { combineReducers } from 'redux'
import movieAssistantReducer from './movie-assistant'

const rootReducer = combineReducers({
  movieAssitant: movieAssistantReducer,
})

export default rootReducer
