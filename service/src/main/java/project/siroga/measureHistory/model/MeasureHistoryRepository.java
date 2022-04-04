package project.siroga.measureHistory.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MeasureHistoryRepository extends JpaRepository<MeasureHistory, Long> {
    Optional<MeasureHistory> findById (long id);
    Optional<MeasureHistory> findByBroker (String broker);
    boolean existsById (long id);
    boolean existsByBroker (String broker);
}
