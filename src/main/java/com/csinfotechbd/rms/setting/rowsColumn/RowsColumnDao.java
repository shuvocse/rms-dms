package com.csinfotechbd.rms.setting.rowsColumn;

import com.csinfotechbd.rms.setting.center.CenterEntity;
import com.csinfotechbd.rms.setting.centereasRow.CentereasRowEntity;
import com.csinfotechbd.rms.setting.warehouse.WarehouseEntity;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
@Repository
public class RowsColumnDao {

    @SuppressWarnings("unchecked")
    public List<RowsColumnEntity> getList() {
        List<RowsColumnEntity> rowsColumnList = new ArrayList<RowsColumnEntity>();
        CentereasRowEntity centerRowObj = new CentereasRowEntity(1, "LEVEL-001", "13132", new CenterEntity());
        rowsColumnList.add(new RowsColumnEntity(1,"CLM-NO-01", "CLM-001", centerRowObj));
        rowsColumnList.add(new RowsColumnEntity(2,"CLM-NO-02", "CLM-002", centerRowObj));
         return rowsColumnList;
    }







}
