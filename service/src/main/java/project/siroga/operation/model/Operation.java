package project.siroga.operation.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import project.siroga.operationHistory.model.OperationHistory;
import project.siroga.sistem.model.Sistem;

import javax.persistence.*;
import java.util.List;

@Entity
public class Operation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String description;

    @OneToMany(mappedBy = "operation")
    @JsonIgnore
    private List<OperationHistory> operationHistories;

    public Operation() {
    }

    public Operation(String description) {
        this.description = description;
    }

    public Operation(long id, String description) {
        this.id = id;
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
