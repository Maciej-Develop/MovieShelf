package maciej.develop.movieshelf.service;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.time.LocalDate;

import javax.sql.rowset.serial.SerialBlob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import maciej.develop.movieshelf.model.Movie;
import maciej.develop.movieshelf.repository.MovieRepository;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public Movie addMovie(String title, String overview, String date, MultipartFile file)
            throws SQLException, IOException {
        Movie m = new Movie();

        m.setTitle(title);
        m.setOverview(overview);
        m.setReleaseDate(LocalDate.parse(date));
        if (!file.isEmpty()) {
            Blob blob = new SerialBlob(file.getBytes());
            m.setPoster(blob);
        }

        return movieRepository.save(m);
    }

}
