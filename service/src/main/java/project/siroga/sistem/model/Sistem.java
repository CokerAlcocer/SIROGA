package project.siroga.sistem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import project.siroga.measureHistory.model.MeasureHistory;
import project.siroga.operation.model.Operation;
import project.siroga.status.model.Status;
import project.siroga.user.model.User;

import javax.persistence.*;
import java.util.List;

@Entity
public class Sistem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String brokerLink;

    @Column(nullable = false)
    private double humEarth;

    @Column(nullable = false)
    private double humAir;

    @Column(nullable = false)
    private double tempEarth;

    @Column(nullable = false)
    private double tempAir;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany
    @JoinTable(
            name = "operation_history",
            joinColumns = @JoinColumn(name = "sistem_id"),
            inverseJoinColumns = @JoinColumn(name = "operation_id")
    )
    private List<Operation> operations;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status;

    @OneToMany(mappedBy = "sistem")
    @JsonIgnore
    private List<MeasureHistory> measureHistories;

    public Sistem() {
    }

    public Sistem(String brokerLink, double humEarth, double humAir, double tempEarth, double tempAir, User user, List<Operation> operations, Status status, List<MeasureHistory> measureHistories) {
        this.brokerLink = brokerLink;
        this.humEarth = humEarth;
        this.humAir = humAir;
        this.tempEarth = tempEarth;
        this.tempAir = tempAir;
        this.user = user;
        this.operations = operations;
        this.status = status;
        this.measureHistories = measureHistories;
    }

    public Sistem(long id, String brokerLink, double humEarth, double humAir, double tempEarth, double tempAir, User user, List<Operation> operations, Status status, List<MeasureHistory> measureHistories) {
        this.id = id;
        this.brokerLink = brokerLink;
        this.humEarth = humEarth;
        this.humAir = humAir;
        this.tempEarth = tempEarth;
        this.tempAir = tempAir;
        this.user = user;
        this.operations = operations;
        this.status = status;
        this.measureHistories = measureHistories;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBrokerLink() {
        return brokerLink;
    }

    public void setBrokerLink(String brokerLink) {
        this.brokerLink = brokerLink;
    }

    public double getHumEarth() {
        return humEarth;
    }

    public void setHumEarth(double humEarth) {
        this.humEarth = humEarth;
    }

    public double getHumAir() {
        return humAir;
    }

    public void setHumAir(double humAir) {
        this.humAir = humAir;
    }

    public double getTempEarth() {
        return tempEarth;
    }

    public void setTempEarth(double tempEarth) {
        this.tempEarth = tempEarth;
    }

    public double getTempAir() {
        return tempAir;
    }

    public void setTempAir(double tempAir) {
        this.tempAir = tempAir;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Operation> getOperations() {
        return operations;
    }

    public void setOperations(List<Operation> operations) {
        this.operations = operations;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public List<MeasureHistory> getMeasureHistories() {
        return measureHistories;
    }

    public void setMeasureHistories(List<MeasureHistory> measureHistories) {
        this.measureHistories = measureHistories;
    }
}
