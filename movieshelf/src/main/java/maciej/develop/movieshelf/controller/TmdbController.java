package maciej.develop.movieshelf.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import maciej.develop.movieshelf.object.MovieDetail;
import maciej.develop.movieshelf.object.MovieShort;
import maciej.develop.movieshelf.object.Results;
import maciej.develop.movieshelf.service.TmdbService;

import java.util.ArrayList;
import java.util.List;

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
    public MovieDetail getMovieDetail(@PathVariable Integer id) {
        return service.getMovie(id);
    }

    @GetMapping("/test/movies")
    public Results getMoviesTest() {
        List<MovieShort> l = new ArrayList<>();
        l.add(new MovieShort(1241982, "Moana 2", "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg"));
        l.add(new MovieShort(939243, "Sonic the Hedgehog 3", "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg"));
        l.add(new MovieShort(558449, "Gladiator II", "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg"));
        l.add(new MovieShort(1241982, "Moana 2", "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg"));
        l.add(new MovieShort(939243, "Sonic the Hedgehog 3 this one is for a big title",
                "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg"));
        l.add(new MovieShort(558449, "Gladiator II", "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg"));
        l.add(new MovieShort(1241982, "Moana 2", "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg"));
        l.add(new MovieShort(939243, "Sonic the Hedgehog 3", "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg"));
        l.add(new MovieShort(558449, "Gladiator II", "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg"));
        return new Results(l);
    }

    @GetMapping("/test")
    public MovieDetail getMethodName() {
        return new MovieDetail(
                1184918,
                78000000,
                "The Wild Robot",
                "Released",
                "2024-09-12",
                "Discover your true nature.",
                8.342,
                4323,
                102,
                "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
                "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
                "/1pmXyN3sKeYoUhu5VBZiDU4BX21.jpg");
    }
}
