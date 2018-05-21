package com.csinfotechbd.rms.setting.country;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CountryService {

    @Autowired
    private CountryDao countryDao;


    public List<CountryEntity> getAllCountry() {
        List<CountryEntity> ObjList = new ArrayList<CountryEntity>();
        ObjList = countryDao.getList();
        for(CountryEntity obj : ObjList){
            System.out.println(obj);
        }
        return ObjList;
    }


}
