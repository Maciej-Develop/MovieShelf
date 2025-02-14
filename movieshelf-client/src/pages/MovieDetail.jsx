import { useState,useEffect, use } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../services/api";

function MovieDetail() {
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
        <h1>{id}</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        {loading && <div><p className="mt-4">Loading ...</p></div>}
    </div>
}

export default MovieDetail;