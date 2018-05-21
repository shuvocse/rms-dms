package com.csinfotechbd.rms.setting.center;

import com.csinfotechbd.rms.setting.warehouse.WarehouseDao;
import com.csinfotechbd.rms.setting.warehouse.WarehouseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CenterService {

    @Autowired
    private CenterDao centerDao;

    public List<CenterEntity> getAll() {
        List<CenterEntity> ObjList = new ArrayList<CenterEntity>();
        ObjList = centerDao.getList();
        for(CenterEntity obj : ObjList){
            System.out.println(obj);
        }
        return ObjList;
    }
}

