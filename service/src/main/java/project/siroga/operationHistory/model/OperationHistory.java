package project.siroga.operationHistory.model;

import project.siroga.operation.model.Operation;
import project.siroga.sistem.model.Sistem;

import javax.persistence.*;

@Entity
public class OperationHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "sistem_id")
    private Sistem sistem;

    @ManyToOne
    @JoinColumn(name = "operation_id")
    private Operation operation;

    public OperationHistory() {
    }

    public OperationHistory(Sistem sistem, Operation operation) {
        this.sistem = sistem;
        this.operation = operation;
    }

    public OperationHistory(long id, Sistem sistem, Operation operation) {
        this.id = id;
        this.sistem = sistem;
        this.operation = operation;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Sistem getSistem() {
        return sistem;
    }

    public void setSistem(Sistem sistem) {
        this.sistem = sistem;
    }

    public Operation getOperation() {
        return operation;
    }

    public void setOperation(Operation operation) {
        this.operation = operation;
    }
}
