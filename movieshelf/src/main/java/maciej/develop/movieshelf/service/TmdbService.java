package maciej.develop.movieshelf.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import maciej.develop.movieshelf.object.Movie;
import maciej.develop.movieshelf.object.Results;

@Service
public class TmdbService {

    private final RestClient restClient;

    public TmdbService(@Value("${tmdb.api.access.key}") String accessKey) {
        restClient = RestClient.builder()
                .baseUrl("https://api.themoviedb.org/3")
                .defaultHeaders(headers -> {
                    headers.set("accept", "application/json");
                    headers.set("Authorization",
                            "Bearer " + accessKey);
                })
                .build();
    }

    public Results discover(Integer page) {
        return restClient.get()
                .uri("/discover/movie?page={page}", page)
                .retrieve()
                .body(new ParameterizedTypeReference<Results>() {
                });
    }

    public Movie getMovie(Integer id) {
        return restClient.get()
                .uri("/movie/{id}", id)
                .retrieve()
                .body(new ParameterizedTypeReference<Movie>() {
                });
    }
}
