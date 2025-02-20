import { Link } from "react-router-dom";

function MovieCard({movie}) {
    return <div className="card h-100">
        <Link to={`/movie/${movie.id}`} className="text-reset text-decoration-none h-100">
            <div>
                <img className="card-img-top img-fluid" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="card-body">
                <h5 className="card-title text-center ">{movie.title}</h5>
            </div>
        </Link>
    </div>
}

export default MovieCard