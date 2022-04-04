package project.siroga.operationHistory.model;

import project.siroga.operation.model.Operation;
import project.siroga.sistem.model.Sistem;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Table
public class OperationHistory {
    @ManyToOne
    @JoinColumn(name = "sistem_id")
    private long sistem_id;

    @ManyToOne
    @JoinColumn(name = "operation_id")
    private long operation_id;

    public OperationHistory() {
    }

    public OperationHistory(long sistem_id, long operation_id) {
        this.sistem_id = sistem_id;
        this.operation_id = operation_id;
    }

    public long getSistem_id() {
        return sistem_id;
    }

    public void setSistem_id(long sistem_id) {
        this.sistem_id = sistem_id;
    }

    public long getOperation_id() {
        return operation_id;
    }

    public void setOperation_id(long operation_id) {
        this.operation_id = operation_id;
    }
}
