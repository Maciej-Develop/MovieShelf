package maciej.develop.movieshelf.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import maciej.develop.movieshelf.object.Movie;
import maciej.develop.movieshelf.object.Results;
import maciej.develop.movieshelf.service.TmdbService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TmdbController {

    @Autowired
    private TmdbService service;

    @GetMapping("/movies")
    public Results getMovies(@RequestParam Integer page) {
        return service.discover(page);
    }

    @GetMapping("/movie/{id}")
    public Movie getMovieDetail(@PathVariable Integer id) {
        return service.getMovie(id);
    }

}
