package com.csinfotechbd.rms.setting.centereasRow;

import com.csinfotechbd.rms.setting.center.CenterEntity;
import com.csinfotechbd.rms.setting.warehouse.WarehouseEntity;
import com.csinfotechbd.rms.setting.zone.ZoneEntity;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
@Repository
public class CentereasRowDao {

    @SuppressWarnings("unchecked")
    public List<CentereasRowEntity> getList() {
        List<CentereasRowEntity> centerObjList = new ArrayList<CentereasRowEntity>();
        CenterEntity centerObj = new CenterEntity(1, "LEVEL-001", "13132", new WarehouseEntity());

        centerObjList.add(new CentereasRowEntity(1,"RW-01", "1200", centerObj));
        centerObjList.add(new CentereasRowEntity(2,"RW-02", "1201", centerObj));
         return centerObjList;
    }







}
