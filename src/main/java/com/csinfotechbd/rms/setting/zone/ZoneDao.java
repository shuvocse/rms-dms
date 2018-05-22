package com.csinfotechbd.rms.setting.zone;

import com.csinfotechbd.rms.setting.country.CountryEntity;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
@Repository
public class ZoneDao {

    @SuppressWarnings("unchecked")
    public List<ZoneEntity> getList() {
        List<ZoneEntity> zoneList = new ArrayList<ZoneEntity>();
//        CountryEntity bangladesh = new CountryEntity(1, "Bangldesh", "0005");
//
//           zoneList.add(new ZoneEntity(1,"Dhaka", "1200", bangladesh));
//           zoneList.add(new ZoneEntity(2,"Shariatpur", "8040", bangladesh));
//           zoneList.add(new ZoneEntity(3,"khulna", "254", bangladesh));

         return zoneList;
    }







}
