package com.csinfotechbd.rms.setting.center;

import com.csinfotechbd.rms.setting.country.CountryEntity;
import com.csinfotechbd.rms.setting.warehouse.WarehouseEntity;
import com.csinfotechbd.rms.setting.zone.ZoneEntity;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
@Repository
public class CenterDao {

    @SuppressWarnings("unchecked")
    public List<CenterEntity> getList() {
        List<CenterEntity> centerObjList = new ArrayList<CenterEntity>();
        WarehouseEntity warehouseObj = new WarehouseEntity(1, "Dhaka", "13132", new ZoneEntity());
        centerObjList.add(new CenterEntity(1,"LEVEL-001", "1200", warehouseObj));
        centerObjList.add(new CenterEntity(2,"LEVEL-002", "1201", warehouseObj));
         return centerObjList;
    }







}
