package project.siroga.measureHistory.model;

import project.siroga.sistem.model.Sistem;

import javax.persistence.*;

@Entity
public class MeasureHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "sistem_id")
    private Sistem sistem;

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

    public MeasureHistory() {
    }

    public MeasureHistory(Sistem sistem, String brokerLink, double humEarth, double humAir, double tempEarth, double tempAir) {
        this.sistem = sistem;
        this.brokerLink = brokerLink;
        this.humEarth = humEarth;
        this.humAir = humAir;
        this.tempEarth = tempEarth;
        this.tempAir = tempAir;
    }

    public MeasureHistory(long id, Sistem sistem, String brokerLink, double humEarth, double humAir, double tempEarth, double tempAir) {
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
