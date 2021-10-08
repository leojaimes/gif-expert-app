
import GitGridItem from "./GifGridItem"
const GitGrid = ({ gifs, loading }) => {
  return (
    <>
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      <div className="card-grid">
        {
          gifs.map((gif, i) => (
            <GitGridItem key={`${gif.id}-${i}`} gif={gif} />
          ))
        }
      </div>

    </>

  )
}

export default GitGrid