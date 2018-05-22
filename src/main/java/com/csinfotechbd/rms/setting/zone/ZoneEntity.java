package com.csinfotechbd.rms.setting.zone;

import com.csinfotechbd.base.BaseProperty;
import com.csinfotechbd.rms.setting.country.CountryEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "rms_setting_zone")
public class ZoneEntity extends BaseProperty{
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long zoneId;

    @Getter
    @Setter
    @Column(nullable = false)
    private String title;

    @Getter
    @Setter
    private String description;

    @Getter
    @Setter
    @Column(nullable = false)
    private int maxWarehouse=1;
    @Getter
    @Setter
    @Column(unique = true)
    private String znUniCode;

    @Getter
    @Setter
    @ManyToOne(optional = true, cascade = {CascadeType.ALL})
    @JoinColumn(name = "countryId")
    private CountryEntity countryEntity;


    public ZoneEntity(){}


    public ZoneEntity(long id, String title,String description, String znUniCode, CountryEntity countryEntity) {
        this.title = title;
        this.znUniCode = znUniCode;
        this.countryEntity = countryEntity;
        this.description = description;
    }



}
