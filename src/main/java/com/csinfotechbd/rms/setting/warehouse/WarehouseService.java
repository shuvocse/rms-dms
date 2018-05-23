package com.csinfotechbd.rms.setting.warehouse;

import com.csinfotechbd.base.BaseService;
import com.csinfotechbd.rms.setting.zone.ZoneDao;
import com.csinfotechbd.rms.setting.zone.ZoneEntity;
import com.csinfotechbd.users.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public interface WarehouseService extends BaseService{

    public List<WarehouseEntity> getAll();
    public WarehouseEntity findById(long id);
}
