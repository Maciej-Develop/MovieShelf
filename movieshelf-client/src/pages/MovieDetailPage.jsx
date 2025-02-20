import { useState,useEffect, use } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import { getMovieDetail } from "../services/api";

function MovieDetailPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        const loadMovie = async () => {
            try {
                const movieDetail = await getMovieDetail(id);
                if (movieDetail == null) {
                    throw "no movie";
                }
                setMovie(movieDetail);
            } catch (err) {
                console.log(err);
                setError("Failed to load the details of the movie");
            }
            finally {
                setLoading(false)
            }
        }
        loadMovie();
    },[])

    return <div>
        {movie != null && <MovieDetail movie={movie}/>}
        {error && <div>{error}</div>}
        {loading && <div className="d-flex justify-content-center"><div className="spinner-border" role="status"></div></div>}
    </div>
}

export default MovieDetailPage;