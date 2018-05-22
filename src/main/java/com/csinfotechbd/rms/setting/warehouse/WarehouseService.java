package com.csinfotechbd.rms.setting.warehouse;

import com.csinfotechbd.rms.setting.zone.ZoneDao;
import com.csinfotechbd.rms.setting.zone.ZoneEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WarehouseService {

    @Autowired
    private WarehouseDao warehouseDao;


    public List<WarehouseEntity> getAll() {
        List<WarehouseEntity> ObjList = new ArrayList<WarehouseEntity>();
        ObjList = warehouseDao.getList();
        for(WarehouseEntity obj : ObjList){
            System.out.println(obj);
        }
        return ObjList;
    }
}
