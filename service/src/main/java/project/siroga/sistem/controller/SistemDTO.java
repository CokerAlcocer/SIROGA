package project.siroga.sistem.controller;

import project.siroga.status.model.Status;
import project.siroga.user.model.User;

public class SistemDTO {
    private long id;
    private String brokerLink;
    private double humEarth, humAir, tempEarth, tempAir;
    private User user;
    private Status status;

    public SistemDTO() {
    }

    public SistemDTO(String brokerLink, double humEarth, double humAir, double tempEarth, double tempAir, User user, Status status) {
        this.brokerLink = brokerLink;
        this.humEarth = humEarth;
        this.humAir = humAir;
        this.tempEarth = tempEarth;
        this.tempAir = tempAir;
        this.user = user;
        this.status = status;
    }

    public SistemDTO(long id, String brokerLink, double humEarth, double humAir, double tempEarth, double tempAir, User user, Status status) {
        this.id = id;
        this.brokerLink = brokerLink;
        this.humEarth = humEarth;
        this.humAir = humAir;
        this.tempEarth = tempEarth;
        this.tempAir = tempAir;
        this.user = user;
        this.status = status;
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

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
