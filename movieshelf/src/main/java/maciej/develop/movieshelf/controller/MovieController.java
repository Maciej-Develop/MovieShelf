package maciej.develop.movieshelf.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import maciej.develop.movieshelf.model.Movie;
import maciej.develop.movieshelf.service.MovieService;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/movie")
@CrossOrigin(origins = "*")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping("/all")
    public Iterable<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

}
