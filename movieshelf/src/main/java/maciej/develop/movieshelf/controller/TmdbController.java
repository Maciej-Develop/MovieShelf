package maciej.develop.movieshelf.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import maciej.develop.movieshelf.object.Results;
import maciej.develop.movieshelf.service.TmdbService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TmdbController {

    @Autowired
    private TmdbService service;

    @GetMapping("/movies")
    public Results getMovies() {
        return service.discover(1);
    }

}
