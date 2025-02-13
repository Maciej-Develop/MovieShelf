package maciej.develop.movieshelf.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import maciej.develop.movieshelf.service.TmdbService;
import maciej.develop.movieshelf.tmdb.Results;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api")
public class TmdbController {

    @Autowired
    private TmdbService service;

    @GetMapping("/movies")
    public Results getMovies() {
        return service.discover();
    }

}
