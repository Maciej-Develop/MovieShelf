function MovieDetail({movie}) {

    const getBadgeClass = (score) => {
        if (score > 6) return "bg-success";
        if (score >= 4) return "bg-warning";
        return "bg-danger";
    };

    return <>
    <div>
      <div className="row">
        <div className="col-3 border">
          <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
          <h5>{movie.tagline}</h5>
          <p><strong>Score:</strong> <span className={`badge ${getBadgeClass(movie.vote_average)}`}>{movie.vote_average.toFixed(1)}</span> ({movie.vote_count} votes)</p>
        </div>
        <div className="col border">
          <div>
            <h1>{movie.title}</h1>
            <p><strong>Overview:</strong></p>
            <p>{movie.overview}</p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Status:</strong> {movie.status}</p>
            <p><strong>Length:</strong> {movie.runtime} minutes</p>
            <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default MovieDetail;