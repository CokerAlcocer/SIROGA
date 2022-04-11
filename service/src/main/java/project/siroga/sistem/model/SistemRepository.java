package project.siroga.sistem.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SistemRepository extends JpaRepository<Sistem, Long> {
    Optional<Sistem> findById (long id);
    Optional<Sistem> findByBroker (String broker);
    Optional<Sistem> findByUser_Id (long id);
    boolean existsById (long id);
    boolean existsByBroker (String broker);
    boolean existsByUser_Id (long id);
}
