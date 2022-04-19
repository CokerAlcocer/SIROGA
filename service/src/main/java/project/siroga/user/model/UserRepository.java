package project.siroga.user.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findById (long id);
    Optional<User> findByEmailAndPassword (String email, String password);
    Optional<User> findByUsername (String username);
    Optional<User> findByEmail (String email);
    boolean existsByEmail (String email);
    boolean existsByEmailAndPassword (String email, String password);
    boolean existsByUsername (String username);
    boolean existsById (long id);
}
