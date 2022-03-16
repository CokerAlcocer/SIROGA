package project.siroga.user.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findById (long id);
    Optional<User> findByUsername (String username);
    Optional<User> findByEmail (String email);
    boolean existsById (long id);
    boolean existsByUsername (String username);
    boolean existsByEmail (String email);
}
