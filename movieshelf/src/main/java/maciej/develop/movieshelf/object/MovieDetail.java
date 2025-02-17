package maciej.develop.movieshelf.object;

public record MovieDetail(
        Integer id,
        Integer budget,
        String title,
        String status,
        String release_date,
        String tagline,
        Double vote_average,
        Integer vote_count,
        Integer runtime,
        String overview,
        String poster_path,
        String backdrop_path) {

}
