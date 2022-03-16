package project.siroga.sistem.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SistemRepository extends JpaRepository<Sistem, Long> {
    Optional<Sistem> findById (long id);
    Optional<Sistem> findByBrokerLink (String brokerLink);
    boolean existsById (long id);
    boolean existsByBrokerLink (String brokerLink);
}
