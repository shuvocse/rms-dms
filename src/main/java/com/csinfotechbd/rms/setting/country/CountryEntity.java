package com.csinfotechbd.rms.setting.country;

import com.csinfotechbd.base.BaseProperty;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;

@Entity
@Table(name = "rms_setting_country")
public class CountryEntity extends BaseProperty{
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long countryId;

    @Getter
    @Setter
    @Column(nullable = false)
    private String title;

    @Getter
    @Setter
    private String description;

    @Getter
    @Setter
    private String cuntCode;

    @Getter
    @Setter
    @Column(nullable = false)
    private int maxZone=1;

    public CountryEntity(){}

    public CountryEntity(long countryId,String title,String description, String cuntCode, int maxZone) {
        this.countryId = countryId;
        this.maxZone = maxZone;
        this.title = title;
        this.description = description;
        this.cuntCode = cuntCode;
    }
}
