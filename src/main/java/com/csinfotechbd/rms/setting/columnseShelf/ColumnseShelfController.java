package com.csinfotechbd.rms.setting.columnseShelf;

import com.csinfotechbd.rms.setting.centereasRow.CentereasRowEntity;
import com.csinfotechbd.rms.setting.centereasRow.CentereasRowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.List;

@Controller
@RequestMapping("/rms/setting/column-shelf")
public class ColumnseShelfController {

    @Autowired
    private ColumnseShelfDao columnseShelfDao;

    @ResponseBody
    @GetMapping(value = "/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ColumnseShelfEntity>> list(Principal principal, HttpSession session) {
        return new ResponseEntity<>(columnseShelfDao.getList(), HttpStatus.OK);
    }
}
