import { Link } from "react-router-dom";

function MovieCard({movie}) {
    return <div className="card p-0">
        <Link to={`/movie/${movie.id}`}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
            <div>
                <h5>{movie.title}</h5>
            </div>
        </Link>
    </div>
}

export default MovieCard