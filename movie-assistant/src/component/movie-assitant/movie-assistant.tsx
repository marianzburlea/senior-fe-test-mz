import Button from '../button'
import S from '../font-icon'

const MovieAssistant = () => {
  // console.log(iconList(iconSet))
  return (
    <div>
      <S.IconFont />
      <h1>This is the movie assistant</h1>
      <Button>
        <i className="mmtflix-back-arrow"></i>
      </Button>

      <Button>
        <i className="mmtflix-forward-arrow"></i>
      </Button>

      <Button>
        <i className="mmtflix-search2"></i>
      </Button>

      <Button>
        <i className="mmtflix-cross2"></i>
      </Button>
    </div>
  )
}

export default MovieAssistant
