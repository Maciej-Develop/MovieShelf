function MovieCard({movie}) {
    return <div className="card p-0">
        <div className="card-img-top">
            <img className="img-fluid rounded-top mb-3" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="card-info mb-3">
            <h5>{movie.title}</h5>
        </div>
    </div>
}

export default MovieCard