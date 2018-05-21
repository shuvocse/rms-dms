package com.csinfotechbd.rms.setting.warehouse;

import com.csinfotechbd.rms.setting.zone.ZoneEntity;
import com.csinfotechbd.rms.setting.zone.ZoneService;
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
@RequestMapping("/rms/setting/warehouse")
public class WarehouseController {

    @Autowired
    private WarehouseService warehouseService;

    @ResponseBody
    @GetMapping(value = "/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<WarehouseEntity>> list(Principal principal, HttpSession session) {
        return new ResponseEntity<>(warehouseService.getAll(), HttpStatus.OK);
    }
}
