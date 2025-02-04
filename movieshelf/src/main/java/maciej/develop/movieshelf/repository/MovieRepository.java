package maciej.develop.movieshelf.repository;

import org.springframework.data.repository.CrudRepository;

import maciej.develop.movieshelf.model.Movie;

public interface MovieRepository extends CrudRepository<Movie, Long> {

}
