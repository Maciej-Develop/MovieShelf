function MovieDetail({movie}) {

    const getBadgeClass = (score) => {
        if (score > 6) return "bg-success";
        if (score >= 4) return "bg-warning";
        return "bg-danger";
    };

    return <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-md-3 position-fixed h-100 p-3" style={{ top: 0, left: 0, overflowY: "auto" }}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="img-fluid rounded" />
        <h5 className="mt-3 text-center">{movie.tagline}</h5>
        <p className="mt-5 text-start"><strong>Score:</strong> <span className={`badge ${getBadgeClass(movie.vote_average)}`}>{movie.vote_average.toFixed(1)}</span> ({movie.vote_count} votes)</p>
      </div>
      
    <div className="col-md-9 offset-md-3" style={{ overflowY: "auto", height: "calc(100vh - some-margin)" }}>
        <div className="p-4 text-start">
          <h1 className="text-center">{movie.title}</h1>
          <p className="mt-5"><strong>Overview:</strong></p>
          <p>{movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Status:</strong> {movie.status}</p>
          <p><strong>Length:</strong> {movie.runtime} minutes</p>
          <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
        </div>
      </div>
    </div>
  </div>
}

export default MovieDetail;