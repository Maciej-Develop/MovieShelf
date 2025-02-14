import { Link } from "react-router-dom";

function MovieCard({movie}) {
    return <div className="card p-0">
        <Link to={`/movie/${movie.id}`} style={{textDecoration: "none",color: "inherit"}}>
            <div className="card-img-top">
                <img className="img-fluid rounded-top mb-3" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="card-info mb-3">
                <h5>{movie.title}</h5>
            </div>
        </Link>
    </div>
}

export default MovieCard