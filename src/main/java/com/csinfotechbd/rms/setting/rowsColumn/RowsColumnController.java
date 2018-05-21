package com.csinfotechbd.rms.setting.rowsColumn;

import com.csinfotechbd.rms.setting.warehouse.WarehouseEntity;
import com.csinfotechbd.rms.setting.warehouse.WarehouseService;
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
@RequestMapping("/rms/setting/rows-column")
public class RowsColumnController {

    @Autowired
    private RowsColumnService rowsColumnService;

    @ResponseBody
    @GetMapping(value = "/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<RowsColumnEntity>> list(Principal principal, HttpSession session) {
        return new ResponseEntity<>(rowsColumnService.getAll(), HttpStatus.OK);
    }
}
