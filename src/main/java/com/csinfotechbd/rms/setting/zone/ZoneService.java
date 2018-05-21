package com.csinfotechbd.rms.setting.zone;

import com.csinfotechbd.rms.setting.country.CountryDao;
import com.csinfotechbd.rms.setting.country.CountryEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ZoneService {

    @Autowired
    private ZoneDao zoneDao;


    public List<ZoneEntity> getAll() {
        List<ZoneEntity> ObjList = new ArrayList<ZoneEntity>();
        ObjList = zoneDao.getList();
        for(ZoneEntity obj : ObjList){
            System.out.println(obj);
        }
        return ObjList;
    }
}
