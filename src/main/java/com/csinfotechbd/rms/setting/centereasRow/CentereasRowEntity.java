package com.csinfotechbd.rms.setting.centereasRow;

import com.csinfotechbd.base.BaseProperty;
import com.csinfotechbd.rms.setting.center.CenterEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "rms_setting_center_row")
public class CentereasRowEntity extends BaseProperty{
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long rowId;
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
    private int maxClm=1;

    @Getter
    @Setter
    @Column(unique = true)
    private String rowUniCode;

    @Getter
    @Setter
    @ManyToOne(optional = true, cascade = {CascadeType.ALL})
    @JoinColumn(name = "centerId")
    private CenterEntity centerEntity;

    public CentereasRowEntity(){}
    public CentereasRowEntity(long id, String title, String rowUniCode, CenterEntity centerEntity) {
        this.rowId = id;
        this.title = title;
        this.rowUniCode = rowUniCode;
        this.centerEntity = centerEntity;
    }

    @Override
    public String toString() {
        return "CentereasRowEntity{" +
                "rowId=" + rowId +
                ", name='" + title + '\'' +
                ", code='" + rowUniCode + '\'' +
                ", centerEntity=" + centerEntity +
                '}';
    }
}
