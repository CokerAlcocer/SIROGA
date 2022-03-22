package project.siroga.measureHistory.controller;

import project.siroga.sistem.model.Sistem;

import javax.persistence.Column;

public class MeasureHistoryDTO {
    private long id;
    private Sistem sistem;
    private String brokerLink;
    private double humEarth, humAir, tempEarth, tempAir;

    public MeasureHistoryDTO() {
    }

    public MeasureHistoryDTO(Sistem sistem, String brokerLink, double humEarth, double humAir, double tempEarth, double tempAir) {
        this.sistem = sistem;
        this.brokerLink = brokerLink;
        this.humEarth = humEarth;
        this.humAir = humAir;
        this.tempEarth = tempEarth;
        this.tempAir = tempAir;
    }

    public MeasureHistoryDTO(long id, Sistem sistem, String brokerLink, double humEarth, double humAir, double tempEarth, double tempAir) {
        this.id = id;
        this.sistem = sistem;
        this.brokerLink = brokerLink;
        this.humEarth = humEarth;
        this.humAir = humAir;
        this.tempEarth = tempEarth;
        this.tempAir = tempAir;
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
}
