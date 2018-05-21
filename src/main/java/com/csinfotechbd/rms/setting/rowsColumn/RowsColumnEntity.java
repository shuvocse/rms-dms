package com.csinfotechbd.rms.setting.rowsColumn;

import com.csinfotechbd.rms.setting.centereasRow.CentereasRowEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "rms_setting_rows_column")
public class RowsColumnEntity {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long columnId;
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
    private int maxShelf=1;

    @Getter
    @Setter
    @Column(unique = true)
    private String clmUniCode;


    @Getter
    @Setter
    @ManyToOne(optional = true, cascade = {CascadeType.ALL})
    @JoinColumn(name = "rowId")
    private CentereasRowEntity centerRowEntity;

    public RowsColumnEntity(){}
    public RowsColumnEntity(long id, String title, String clmUniCode, CentereasRowEntity centerRowEntity) {
        this.columnId = id;
        this.title = title;
        this.clmUniCode = clmUniCode;
        this.centerRowEntity = centerRowEntity;
    }
}
