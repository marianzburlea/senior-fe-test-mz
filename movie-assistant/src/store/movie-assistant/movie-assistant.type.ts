export interface IMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface IInitialState {
  isLoading: boolean
  error: string | null
  list: IMovie[]
  term?: string
  totalResults: number
  page: number
  imdbID?: string
  selected: {
    [prop: string]: any
  }
}

export interface IAction {
  type: string
  list?: IMovie[]
  message?: string
  term?: string
  imdbID?: string
  totalResults?: number
  page?: number
  selected: any
}
