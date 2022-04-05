package project.siroga.operationHistory.controller;

import project.siroga.operation.model.Operation;
import project.siroga.sistem.model.Sistem;

public class OperationHistoryDTO {
    private Sistem sistem;
    private Operation operation;

    public OperationHistoryDTO() {
    }

    public OperationHistoryDTO(Sistem sistem, Operation operation) {
        this.sistem = sistem;
        this.operation = operation;
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
