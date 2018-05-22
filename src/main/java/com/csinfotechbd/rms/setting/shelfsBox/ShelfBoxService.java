package com.csinfotechbd.rms.setting.shelfsBox;

import com.csinfotechbd.rms.setting.rowsColumn.RowsColumnDao;
import com.csinfotechbd.rms.setting.rowsColumn.RowsColumnEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ShelfBoxService {

    @Autowired
    private ShelfBoxDao shelfBoxDao;


    public List<ShelfBoxEntity> getAll() {
        List<ShelfBoxEntity> ObjList = new ArrayList<ShelfBoxEntity>();
        ObjList = shelfBoxDao.getList();
        for(ShelfBoxEntity obj : ObjList){
            System.out.println(obj);
        }
        return ObjList;
    }
}
