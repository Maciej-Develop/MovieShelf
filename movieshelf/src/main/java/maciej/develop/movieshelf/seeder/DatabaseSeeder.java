package maciej.develop.movieshelf.seeder;

import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import maciej.develop.movieshelf.service.MovieService;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    @Autowired
    private MovieService movieService;

    @Override
    public void run(String... args) {
        try {
            movieService.addMovie(
                    "The Wild Robot",
                    "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
                    "2024-09-12",
                    getPoster("wild_robot.jpg"));
            movieService.addMovie(
                    "Mad Max: Fury Road",
                    "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
                    "2015-05-13",
                    getPoster("mad_max_fury_road.jpg"));
            movieService.addMovie(
                    "Madame Web",
                    "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
                    "2024-02-14",
                    getPoster("madame_web.jpg"));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private byte[] getPoster(String filename) throws IOException {
        try {
            InputStream input = getClass().getClassLoader().getResourceAsStream("img/" + filename);
            return IOUtils.toByteArray(input);
        } catch (IOException e) {
            e.printStackTrace();
            throw e;
        }

    }

}
