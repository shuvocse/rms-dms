package com.csinfotechbd.rms.setting.columnseShelf;

import com.csinfotechbd.rms.setting.center.CenterEntity;
import com.csinfotechbd.rms.setting.centereasRow.CentereasRowEntity;
import com.csinfotechbd.rms.setting.rowsColumn.RowsColumnEntity;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
@Repository
public class ColumnseShelfDao {

    @SuppressWarnings("unchecked")
    public List<ColumnseShelfEntity> getList() {
        List<ColumnseShelfEntity> objectList = new ArrayList<ColumnseShelfEntity>();
        RowsColumnEntity obj = new RowsColumnEntity(1, "RW-001", "13132", new CentereasRowEntity());
        objectList.add(new ColumnseShelfEntity(1,"SLF-NO-01", "SLF-001", obj));

         return objectList;
    }







}
