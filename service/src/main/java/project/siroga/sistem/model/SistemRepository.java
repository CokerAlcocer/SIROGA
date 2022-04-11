package project.siroga.sistem.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SistemRepository extends JpaRepository<Sistem, Long> {
    Optional<Sistem> findById (long id);
    Optional<Sistem> findByBroker (String broker);
    Optional<Sistem> findAllBy (long id);
    boolean existsById (long id);
    boolean existsByBroker (String broker);
    boolean existsAllByUser_Id (long id);
}
