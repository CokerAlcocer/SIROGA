package project.siroga.sistem.controller;

import project.siroga.status.model.Status;
import project.siroga.user.model.User;

public class SistemDTO {
    private long id;
    private String broker, description;
    private double humEarthMin, humEarthMax, humAirMin, humAirMax, tempEarthMin, tempEarthMax, tempAirMin, tempAirMax;
    private User user;
    private Status status;

    public SistemDTO() {
    }

    public SistemDTO(String broker, String description, double humEarthMin, double humEarthMax, double humAirMin, double humAirMax, double tempEarthMin, double tempEarthMax, double tempAirMin, double tempAirMax, User user, Status status) {
        this.broker = broker;
        this.description = description;
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
    }

    public SistemDTO(long id, String broker, String description, double humEarthMin, double humEarthMax, double humAirMin, double humAirMax, double tempEarthMin, double tempEarthMax, double tempAirMin, double tempAirMax, User user, Status status) {
        this.id = id;
        this.broker = broker;
        this.description = description;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
}
