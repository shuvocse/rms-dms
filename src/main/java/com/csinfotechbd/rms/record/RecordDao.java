package com.csinfotechbd.rms.record;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.csinfotechbd.rms.setting.columnseShelf.ColumnseShelfEntity;
import com.csinfotechbd.rms.setting.shelfsBox.ShelfBoxEntity;
@Repository
public class RecordDao {

    @SuppressWarnings("unchecked")
    public List<RecordEntity> getList() {
        List<RecordEntity> recordObjList = new ArrayList<RecordEntity>();
        ShelfBoxEntity shelfBoxEntityObj = new ShelfBoxEntity(1, "BOX-NO-01", "BOX-CD-001", 10, new ColumnseShelfEntity());
        recordObjList.add(new RecordEntity(1, "RD-001", "Electronic bill", "Bill","Company", "Bill-ref", "Bill for May", new Date(), new Date(), shelfBoxEntityObj));
        recordObjList.add(new RecordEntity(1, "RD-002", "Gash bill", "Bill","Company", "Bill-ref", "Bill for April", new Date(), new Date(), shelfBoxEntityObj));
         return recordObjList;
    }







}
