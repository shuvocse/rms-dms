package com.csinfotechbd.rms.setting.warehouse;

import com.csinfotechbd.rms.setting.country.CountryEntity;
import com.csinfotechbd.rms.setting.zone.ZoneEntity;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Repository;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
@Repository
@Transactional
public class WarehouseDao {

    @Autowired
    private SessionFactory _sessionFactory;

    private Session getSession() {
        return _sessionFactory.getCurrentSession();
    }

    @SuppressWarnings("unchecked")
    public List<WarehouseEntity> getAll() {
        Criteria criteria = getSession().createCriteria(WarehouseEntity.class);
        List<WarehouseEntity> list = criteria.list();
        return list;
    }



    public WarehouseEntity findById(long id) {
        WarehouseEntity warehouseEntity  = (WarehouseEntity) getSession().createCriteria(WarehouseEntity.class).add(Restrictions.eq("warehouseId", id)).uniqueResult();
        return warehouseEntity;
    }

    public <T> boolean save(String entityName, Object obj) {
        getSession().save(entityName, obj);
        return true;
    }





}
