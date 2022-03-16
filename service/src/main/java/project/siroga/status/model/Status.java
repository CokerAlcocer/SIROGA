package project.siroga.status.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import project.siroga.sistem.model.Sistem;

import javax.persistence.*;
import java.util.List;

@Entity
public class Status {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String description;

    @OneToMany(mappedBy = "status")
    @JsonIgnore
    private List<Sistem> sistems;

    public Status() {
    }

    public Status(String description, List<Sistem> sistems) {
        this.description = description;
        this.sistems = sistems;
    }

    public Status(long id, String description, List<Sistem> sistems) {
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
