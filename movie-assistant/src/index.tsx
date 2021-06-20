import { render } from 'react-dom'

import MovieAssistant from './component/movie-assitant'

const here = document.querySelector('#here')
const movieAssistant = <MovieAssistant />

render(movieAssistant, here)
