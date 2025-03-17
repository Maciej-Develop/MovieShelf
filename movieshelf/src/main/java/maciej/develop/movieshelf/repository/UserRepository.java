package maciej.develop.movieshelf.repository;

import org.springframework.data.repository.CrudRepository;

import maciej.develop.movieshelf.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);

    boolean existsByUsername(String username);
}
