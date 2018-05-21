package com.csinfotechbd.rms.setting.shelfsBox;

import com.csinfotechbd.rms.setting.center.CenterEntity;
import com.csinfotechbd.rms.setting.centereasRow.CentereasRowEntity;
import com.csinfotechbd.rms.setting.columnseShelf.ColumnseShelfEntity;
import com.csinfotechbd.rms.setting.rowsColumn.RowsColumnEntity;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
@Repository
public class ShelfBoxDao {

    @SuppressWarnings("unchecked")
    public List<ShelfBoxEntity> getList() {
        List<ShelfBoxEntity> objList = new ArrayList<ShelfBoxEntity>();
        ColumnseShelfEntity obj = new ColumnseShelfEntity(1, "CLM-No-001", "CLM-01", new RowsColumnEntity());
        objList.add(new ShelfBoxEntity(1,"BOX-NO-01", "BOX-001",10, obj));
        objList.add(new ShelfBoxEntity(2,"BOX-NO-01", "BOX-001",10, obj));
         return objList;
    }







}
