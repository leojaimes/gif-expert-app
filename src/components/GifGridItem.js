const GitGridItem =  ({ gif })=> {
  return (
    <div className="card animate__animated animate__fadeIn">
    <img src={ gif.url } alt={ gif.title } />
    <p> { gif.title } </p>
</div>
  )
}

export default GitGridItem