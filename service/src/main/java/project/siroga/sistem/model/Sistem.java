package project.siroga.sistem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import project.siroga.measureHistory.model.MeasureHistory;
import project.siroga.operation.model.Operation;
import project.siroga.operationHistory.model.OperationHistory;
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
    private String broker;

    @Column(nullable = false)
    private double humEarthMin;

    @Column(nullable = false)
    private double humEarthMax;

    @Column(nullable = false)
    private double humAirMin;

    @Column(nullable = false)
    private double humAirMax;

    @Column(nullable = false)
    private double tempEarthMin;

    @Column(nullable = false)
    private double tempEarthMax;

    @Column(nullable = false)
    private double tempAirMin;

    @Column(nullable = false)
    private double tempAirMax;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status;

    @OneToMany(mappedBy = "sistem")
    @JsonIgnore
    private List<MeasureHistory> measureHistories;

    @OneToMany(mappedBy = "sistem")
    @JsonIgnore
    private List<OperationHistory> operationHistories;

    public Sistem() {
    }

    public Sistem(String broker, double humEarthMin, double humEarthMax, double humAirMin, double humAirMax, double tempEarthMin, double tempEarthMax, double tempAirMin, double tempAirMax, User user, Status status, List<MeasureHistory> measureHistories, List<OperationHistory> operationHistories) {
        this.broker = broker;
        this.humEarthMin = humEarthMin;
        this.humEarthMax = humEarthMax;
        this.humAirMin = humAirMin;
        this.humAirMax = humAirMax;
        this.tempEarthMin = tempEarthMin;
        this.tempEarthMax = tempEarthMax;
        this.tempAirMin = tempAirMin;
        this.tempAirMax = tempAirMax;
        this.user = user;
        this.status = status;
        this.measureHistories = measureHistories;
        this.operationHistories = operationHistories;
    }

    public Sistem(long id, String broker, double humEarthMin, double humEarthMax, double humAirMin, double humAirMax, double tempEarthMin, double tempEarthMax, double tempAirMin, double tempAirMax, User user, Status status, List<MeasureHistory> measureHistories, List<OperationHistory> operationHistories) {
        this.id = id;
        this.broker = broker;
        this.humEarthMin = humEarthMin;
        this.humEarthMax = humEarthMax;
        this.humAirMin = humAirMin;
        this.humAirMax = humAirMax;
        this.tempEarthMin = tempEarthMin;
        this.tempEarthMax = tempEarthMax;
        this.tempAirMin = tempAirMin;
        this.tempAirMax = tempAirMax;
        this.user = user;
        this.status = status;
        this.measureHistories = measureHistories;
        this.operationHistories = operationHistories;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBroker() {
        return broker;
    }

    public void setBroker(String broker) {
        this.broker = broker;
    }

    public double getHumEarthMin() {
        return humEarthMin;
    }

    public void setHumEarthMin(double humEarthMin) {
        this.humEarthMin = humEarthMin;
    }

    public double getHumEarthMax() {
        return humEarthMax;
    }

    public void setHumEarthMax(double humEarthMax) {
        this.humEarthMax = humEarthMax;
    }

    public double getHumAirMin() {
        return humAirMin;
    }

    public void setHumAirMin(double humAirMin) {
        this.humAirMin = humAirMin;
    }

    public double getHumAirMax() {
        return humAirMax;
    }

    public void setHumAirMax(double humAirMax) {
        this.humAirMax = humAirMax;
    }

    public double getTempEarthMin() {
        return tempEarthMin;
    }

    public void setTempEarthMin(double tempEarthMin) {
        this.tempEarthMin = tempEarthMin;
    }

    public double getTempEarthMax() {
        return tempEarthMax;
    }

    public void setTempEarthMax(double tempEarthMax) {
        this.tempEarthMax = tempEarthMax;
    }

    public double getTempAirMin() {
        return tempAirMin;
    }

    public void setTempAirMin(double tempAirMin) {
        this.tempAirMin = tempAirMin;
    }

    public double getTempAirMax() {
        return tempAirMax;
    }

    public void setTempAirMax(double tempAirMax) {
        this.tempAirMax = tempAirMax;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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
