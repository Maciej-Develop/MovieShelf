import MovieCard from "../components/MovieCard";
import { getDiscoverMovies } from "../services/api";
import { useEffect,useState } from "react";

function Home() {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMovies = async () =>{
            try {
                const discoverMovies = await getDiscoverMovies()
                setMovies(discoverMovies)
            } catch (err) {
                console.log(err);
                setError("Failed to load movies.")
            }
            finally{
                setLoading(false)
            }
        }
        loadMovies()
        }, []);

    return <div className="home">
        <div className="row row-cols-1 row-cols-md-5 gap-4 justify-content-center">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>
}

export default Home