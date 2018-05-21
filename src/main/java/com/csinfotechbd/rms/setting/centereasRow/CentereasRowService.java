package com.csinfotechbd.rms.setting.centereasRow;

import com.csinfotechbd.rms.setting.country.CountryDao;
import com.csinfotechbd.rms.setting.country.CountryEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CentereasRowService {

    @Autowired
    private CentereasRowDao centereasRowDao;


    public List<CentereasRowEntity> getAll() {
        List<CentereasRowEntity> objList = new ArrayList<CentereasRowEntity>();
        objList = centereasRowDao.getList();
        for (CentereasRowEntity obj : objList) {
            System.out.println(obj);
        }
        return objList;
    }
}
