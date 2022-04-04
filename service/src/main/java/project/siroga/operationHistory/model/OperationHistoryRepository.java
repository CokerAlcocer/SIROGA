package project.siroga.operationHistory.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.siroga.sistem.model.Sistem;

import java.util.Optional;

@Repository
public interface OperationHistoryRepository extends JpaRepository<OperationHistory, Long> {
    Optional<OperationHistory> findBySistem_id(long id);
    boolean existsBySistem_id(long id);
    Optional<OperationHistory> findByOperation_id(long id);
    boolean existsByOperation_id(long id);
}
