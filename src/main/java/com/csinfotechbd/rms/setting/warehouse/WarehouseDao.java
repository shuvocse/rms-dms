package com.csinfotechbd.rms.setting.warehouse;

import com.csinfotechbd.rms.setting.country.CountryEntity;
import com.csinfotechbd.rms.setting.zone.ZoneEntity;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
@Repository
public class WarehouseDao {

    @SuppressWarnings("unchecked")
    public List<WarehouseEntity> getList() {
        List<WarehouseEntity> warehouseList = new ArrayList<WarehouseEntity>();
//        ZoneEntity zoneEntity = new ZoneEntity(1, "Dhaka", "13132", new CountryEntity());
//        warehouseList.add(new WarehouseEntity(1,"HOUSE-NO-001", "1200", zoneEntity));
//        warehouseList.add(new WarehouseEntity(2,"HOUSE-NO-002", "1201", zoneEntity));
         return warehouseList;
    }







}
