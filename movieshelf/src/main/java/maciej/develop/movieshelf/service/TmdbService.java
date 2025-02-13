package maciej.develop.movieshelf.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import lombok.extern.slf4j.Slf4j;
import maciej.develop.movieshelf.tmdb.Results;

@Slf4j
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

    public Results discover() {
        return restClient.get()
                .uri("/discover/movie")
                .retrieve()
                .body(new ParameterizedTypeReference<Results>() {
                });
    }
}
