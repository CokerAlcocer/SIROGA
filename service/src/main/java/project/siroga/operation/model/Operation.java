package project.siroga.operation.model;

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

    @ManyToMany(mappedBy = "operations")
    private List<Sistem> sistems;

    public Operation() {
    }

    public Operation(String description, List<Sistem> sistems) {
        this.description = description;
        this.sistems = sistems;
    }

    public Operation(long id, String description, List<Sistem> sistems) {
        this.id = id;
        this.description = description;
        this.sistems = sistems;
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

    public List<Sistem> getSistems() {
        return sistems;
    }

    public void setSistems(List<Sistem> sistems) {
        this.sistems = sistems;
    }
}
