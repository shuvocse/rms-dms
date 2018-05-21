package com.csinfotechbd.rms.record;

import com.csinfotechbd.rms.setting.center.CenterDao;
import com.csinfotechbd.rms.setting.center.CenterEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecordService {

    @Autowired
    private RecordDao recordDao;

    public List<RecordEntity> getAll() {
        List<RecordEntity> ObjList = new ArrayList<RecordEntity>();
        ObjList = recordDao.getList();
        for(RecordEntity obj : ObjList){
            System.out.println(obj);
        }
        return ObjList;
    }
}
