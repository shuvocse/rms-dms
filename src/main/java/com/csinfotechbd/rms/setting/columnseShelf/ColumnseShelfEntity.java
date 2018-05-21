package com.csinfotechbd.rms.setting.columnseShelf;

import com.csinfotechbd.rms.setting.rowsColumn.RowsColumnEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "rms_setting_columnse_shelf")
public class ColumnseShelfEntity {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long shelfId;
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
    private int maxBox=1;

    @Getter
    @Setter
    @Column(unique = true)
    private String shUniCode;

    @Getter
    @Setter
    @ManyToOne(optional = true, cascade = {CascadeType.ALL})
    @JoinColumn(name = "columnId")
    private RowsColumnEntity centerColumnEntity;

    public ColumnseShelfEntity(){}
    public ColumnseShelfEntity(long id, String name, String shUniCode, RowsColumnEntity centerColumnEntity) {
        this.shelfId = id;
        this.title = name;
        this.shUniCode = shUniCode;
        this.centerColumnEntity = centerColumnEntity;
    }

    @Override
    public String toString() {
        return "ColumnseShelfEntity{" +
                "shelfId=" + shelfId +
                ", name='" + title + '\'' +
                ", code='" + shUniCode + '\'' +
                ", centerColumnEntity=" + centerColumnEntity +
                '}';
    }
}
