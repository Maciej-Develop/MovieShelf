
const BASE_URL="http://localhost:8080"

export const getDiscoverMovies = async (page) => {
    const response = await fetch(`${BASE_URL}/api/movies?page=${page}`);
    const data = await response.json();
    return data.results;
}

export const getMovieDetail = async (id) => {
    const response = await fetch(`${BASE_URL}/api/movie/${id}`);
    const data = await response.json();
    return data;
}