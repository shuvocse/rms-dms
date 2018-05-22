package com.csinfotechbd.rms.setting.rowsColumn;

import com.csinfotechbd.rms.setting.warehouse.WarehouseDao;
import com.csinfotechbd.rms.setting.warehouse.WarehouseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RowsColumnService {

    @Autowired
    private RowsColumnDao rowsColumnDao;


    public List<RowsColumnEntity> getAll() {
        List<RowsColumnEntity> ObjList = new ArrayList<RowsColumnEntity>();
        ObjList = rowsColumnDao.getList();
        for(RowsColumnEntity obj : ObjList){
            System.out.println(obj);
        }
        return ObjList;
    }
}

