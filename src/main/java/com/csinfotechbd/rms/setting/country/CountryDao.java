package com.csinfotechbd.rms.setting.country;

import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
@Repository
public class CountryDao {

    @SuppressWarnings("unchecked")
    public List<CountryEntity> getList() {
        List<CountryEntity> countryList = new ArrayList<CountryEntity>();

//        countryList.add(new CountryEntity(1,"Bangladesh", "001"));
//        countryList.add(new CountryEntity(2,"America", "002"));
//        countryList.add(new CountryEntity(3,"Canada", "003"));

         return countryList;
    }







}
