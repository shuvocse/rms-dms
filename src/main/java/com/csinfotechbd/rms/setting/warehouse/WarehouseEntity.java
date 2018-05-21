package com.csinfotechbd.rms.setting.warehouse;

import com.csinfotechbd.rms.setting.country.CountryEntity;
import com.csinfotechbd.rms.setting.zone.ZoneEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "rms_setting_warehouse")
public class WarehouseEntity {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long warehouseId;
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
    private int maxCenter=1;

    @Getter
    @Setter
    @Column(unique = true)
    private String wrhUniCode;

    @Getter
    @Setter
    @ManyToOne(optional = true, cascade = {CascadeType.ALL})
    @JoinColumn(name = "zoneId")
    private ZoneEntity zoneEntity;

    @Override
    public String toString() {
        return "WarehouseEntity{" +
                "warehouseId=" + warehouseId +
                ", name='" + title + '\'' +
                ", code='" + wrhUniCode + '\'' +
                ", zoneEntity=" + zoneEntity +
                '}';
    }
    public WarehouseEntity(){}
    public WarehouseEntity(long id, String title, String code, ZoneEntity zoneEntity) {
        this.warehouseId = id;
        this.title = title;
        this.wrhUniCode = code;
        this.zoneEntity = zoneEntity;
    }
}
